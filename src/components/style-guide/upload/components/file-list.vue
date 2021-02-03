<!--<template>-->
<!--  <ul class="b-list b-file-list">-->
<!--    <template v-for="file in filesLocal">-->
<!--      <slot v-bind:file="file">-->
<!--        <b-file-item-->
<!--          ref="fileItem"-->
<!--          :file="file"-->
<!--          :id="file.id"-->
<!--          :status="file.status"-->
<!--          :removeEnabled="removeEnabled"-->
<!--          :thumbnailsEnabled="thumbnailsEnabled"-->
<!--          :fallbackThumbnail="fallbackThumbnail"-->
<!--          :iconsEnabled="iconsEnabled"-->
<!--          :fallbackIcon="fallbackIcon"-->
<!--          :iconProp="iconProp"-->
<!--          :thumbnailProp="thumbnailProp"-->
<!--          :descriptionProp="descriptionProp"-->
<!--          :progress="file.progress"-->
<!--          @onRemove="onRemove"-->
<!--        >-->
<!--        </b-file-item>-->
<!--      </slot>-->
<!--    </template>-->
<!--  </ul>-->
<!--</template>-->

<!--<script>-->
<!--  import { BList, ItemBaseMixin } from '../../list/index'-->
<!--  import UploadInputMixing from '../mixins/upload-inputs'-->
<!--  import xhrUpload from '../helpers/ajax-uploader'-->
<!--  import BFileItem from './file-item'-->
<!--  import idMixin from '../../../../lib/mixins/id'-->
<!--  import BvEvent from '../../../../lib/utils/bv-event.class'-->
<!--  import {STATUS} from '../helpers/shared-properties'-->
<!--  import { isArray } from '../../../../lib/utils/array';-->

<!--  export default {-->
<!--    components: {-->
<!--      BList,-->
<!--      BFileItem,-->
<!--    },-->
<!--    extends: BList,-->
<!--    inject: {-->
<!--      bUpload: {-->
<!--        default() /* istanbul ignore next */ {-->
<!--          return null-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    provide() {-->
<!--      return {-->
<!--        bList: this-->
<!--      }-->
<!--    },-->
<!--    mixins: [idMixin, ItemBaseMixin, UploadInputMixing],-->
<!--    data() {-->
<!--      return {-->
<!--        _status: STATUS,-->
<!--        fileName: 'file',-->
<!--        filesLocal: [],-->
<!--        reqs: {},-->
<!--      }-->
<!--    },-->
<!--    props: {-->
<!--      files: {-->
<!--        type: Array,-->
<!--        default: () => ([])-->
<!--      },-->
<!--      action: {-->
<!--        type: String,-->
<!--        default: 'http://localhost:8080/fileupload'-->
<!--      },-->
<!--      uploadThreads: {-->
<!--        type: Number,-->
<!--        default: 1-->
<!--      },-->
<!--    },-->
<!--    beforeMount() {-->
<!--      // initialize here to make sure-->
<!--      // data replacement on storybook or by extension-->
<!--      // don't affect the component behaviour-->
<!--      this._status = STATUS-->
<!--    },-->
<!--    mounted() {-->
<!--      this.initialize(this.files)-->
<!--      if(!this.autoUpload && this.bUpload) {-->
<!--        this.bUpload.$on('upload', () => this.uploadThreadsHandler(this.uploadThreads))-->
<!--      }-->
<!--    },-->
<!--    watch: {-->
<!--      files(newFiles, oldFiles) {-->
<!--        this.initialize(newFiles)-->
<!--      },-->
<!--      -->
<!--      autoUpload(newVal) {-->
<!--        // autoUpload Enabled, stop listening for manual upload event-->
<!--        if(newVal) {-->
<!--          this.bUpload.$off('upload')-->
<!--        } else {-->
<!--          this.bUpload.$on('upload', () => this.uploadThreadsHandler(this.uploadThreads))-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    computed: {-->
<!--      _limit() {-->
<!--        return this.bUpload.limit || this.limit-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      genFileId(file) {-->
<!--        const fileStr = file.name + file.lastModified + file.size + file.type;-->
<!--        return this.getHashFromString(fileStr)-->
<!--      },-->
<!--      initialize(files) {-->
<!--        const _files = [...files]-->
<!--        _files.forEach(f => {-->
<!--          const id = this.genFileId(f)-->
<!--          this.filesLocal.unshift(Object.assign(f, {id, status: STATUS.PENDING}))-->
<!--        })-->
<!--        -->
<!--        if(this.autoUpload) {-->
<!--          this.$nextTick(() => {-->
<!--            this.uploadThreadsHandler()-->
<!--          })-->
<!--        }-->
<!--      },-->
<!--      async uploadThreadsHandler() {-->
<!--        if (this._limit && this.filesLocal.length + this.files.length > this._limit) {-->
<!--          this.onExceed && this.onExceed(this.files, this.filesLocal);-->
<!--          return;-->
<!--        }-->
<!--        const pending = this.filesLocal.find(f => f.status === STATUS.PENDING)-->
<!--        if(pending) {-->
<!--          pending.status = STATUS.IN_PROGRESS-->
<!--          this.upload(pending)-->
<!--        }-->
<!--      },-->
<!--      -->
<!--      upload(rawFile) {-->
<!--        if (!this.beforeUpload) {-->
<!--          return this.post(rawFile);-->
<!--        }-->
<!--        const before = this.beforeUpload(rawFile);-->
<!--        if(before !== false) {-->
<!--          return this.post(rawFile);-->
<!--        } else {-->
<!--          return this.onRemove(null, rawFile);-->
<!--        }-->
<!--      },-->
<!--      onSuccess(res, file) {-->
<!--        //timing out to show progress bar-->
<!--        setTimeout(() => {-->
<!--          file.status = STATUS.SUCCESS-->
<!--          this.bUpload.onSuccess(res, file)-->
<!--          this.$forceUpdate()-->
<!--        }, 400)-->
<!--        -->
<!--        this.uploadThreadsHandler()-->
<!--      },-->

<!--      onError(res, file) {-->
<!--        console.log(res)-->
<!--        //timing out to show progress bar-->
<!--        setTimeout(() => {-->
<!--          file.status = STATUS.FAIL-->
<!--          this.bUpload.onError(res, file)-->
<!--          this.$forceUpdate()-->
<!--        }, 400)-->
<!--        -->
<!--        this.uploadThreadsHandler()-->
<!--      },-->
<!--      -->
<!--      abort(file) {-->
<!--        const { reqs } = this;-->
<!--        if (file) {-->
<!--          let uid = file;-->
<!--          if (file.uid) uid = file.uid;-->
<!--          if (reqs[uid]) {-->
<!--            reqs[uid].abort();-->
<!--          }-->
<!--        } else {-->
<!--          Object.keys(reqs).forEach((uid) => {-->
<!--            if (reqs[uid]) reqs[uid].abort();-->
<!--            delete reqs[uid];-->
<!--          });-->
<!--        }-->
<!--      },-->
<!--      post(rawFile) {-->
<!--        const { uid } = rawFile;-->
<!--        const options = {-->
<!--          headers: this.bUpload.headers || {},-->
<!--          withCredentials: this.bUpload.withCredentials || false,-->
<!--          file: rawFile,-->
<!--          data: this.bUpload.data || {},-->
<!--          filename: this.bUpload.name || this.fileName,-->
<!--          action: this.bUpload.action,-->
<!--          onProgress: e => {-->
<!--            return this.onProgress(e, rawFile)-->
<!--          },-->
<!--          onSuccess: res => {-->
<!--            this.onSuccess(res, rawFile)-->
<!--            delete this.reqs[uid];-->
<!--          },-->
<!--          onError: err => {-->
<!--            this.onError(err, rawFile)-->
<!--            delete this.reqs[uid];-->
<!--          }-->
<!--        }-->
<!--        const functor =  this.bUpload.uploadHandler || xhrUpload-->
<!--        const req = functor(options)-->
<!--        this.reqs[uid] = req;-->
<!--        return req-->
<!--      },-->
<!--      onProgress(e, file) {-->
<!--        this.$nextTick(() => {-->
<!--          file.progress = Math.floor(e.percent)-->
<!--          this.bUpload.onProgress(e, file)-->
<!--          this.$forceUpdate()-->
<!--        })-->
<!--      },-->
<!--      // buildInUploader(file) {-->
<!--      //   const self = this-->
<!--      //   return new Promise((resolve, reject) => {-->
<!--      //     const xhr = new XMLHttpRequest()-->
<!--      //     const formData = new FormData()-->
<!--      //     xhr.open('POST', this.action, true)-->
<!--      //-->
<!--      //     const fakeFallbackPercentProgress = this.computeFakeProgress(file)-->
<!--      //     // Add following event listener-->
<!--      //     xhr.upload.addEventListener("progress", (e) => {-->
<!--      //       const percent = e.lengthComputable ? Math.floor((e.loaded / e.total) * 100) :-->
<!--      //         fakeFallbackPercentProgress + file.progress-->
<!--      //       self.$nextTick(() => {-->
<!--      //         file.progress = percent-->
<!--      //         self.$forceUpdate()-->
<!--      //       })-->
<!--      //     })-->
<!--      //-->
<!--      //     xhr.onerror = function error(e) {-->
<!--      //       reject(file)-->
<!--      //     };-->
<!--      //-->
<!--      //     xhr.onload = function onload() {-->
<!--      //       if (xhr.status < 200 || xhr.status >= 300) {-->
<!--      //         reject(file)-->
<!--      //       }-->
<!--      //       resolve(file)-->
<!--      //     };-->
<!--      //-->
<!--      //     formData.append('file', file)-->
<!--      //     xhr.send(formData)-->
<!--      //   });-->
<!--      // },-->
<!--      -->
<!--      async onRemove(id) {-->
<!--        // by call bvEvt.preventDefault()-->
<!--        const tabEvt = new BvEvent('onRemove', {-->
<!--          cancelable: true,-->
<!--          vueTarget: this,-->
<!--        })-->

<!--        this.$emit(tabEvt.type, tabEvt)-->

<!--        if (!tabEvt.defaultPrevented) {-->
<!--          this.filesLocal = this.filesLocal.filter(f => f.id !== id)-->
<!--        }-->
<!--      },-->
<!--    },-->
<!--  }-->

<!--</script>-->

<!--<style lang="scss">-->
<!--  .b-file-list {-->
<!--    .el-icon-upload-success {-->
<!--      color: $green;-->
<!--    }-->
<!--    -->
<!--    .el-icon-upload-error {-->
<!--      color: $red;-->
<!--    }-->
<!--    -->
<!--    .b-progress-bottom {-->
<!--      padding: .5rem .5rem 0 .5rem;-->
<!--    }-->
<!--  }-->
<!--</style>-->
