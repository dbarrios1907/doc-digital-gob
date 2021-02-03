<!--<template>-->
<!--  <li tabindex="0" class="b-list__item select-text antialiased" v-if="file">-->
<!--    <div class="b-item__top">-->
<!--      <slot name="item-top">-->
<!--      </slot>-->
<!--    </div>-->
<!--    <a class="d-flex">-->
<!--      <div class="b-item__start">-->
<!--        <template v-if="_iconsEnabled">-->
<!--          <i :class="file[_iconProp] || fallbackIcon"></i>-->
<!--        </template>-->
<!--        <template v-else-if="thumbnailsEnabled">-->
<!--          <img class="b-item__thumbnail" :src="thumbnail"/>-->
<!--        </template>-->
<!--      </div>-->
<!--      -->
<!--      <div class="b-item__body">-->
<!--        {{file[_descriptionProp]}}-->
<!--      </div>-->
<!--      -->
<!--      <div class="b-item__end">-->
<!--        <template>-->
<!--          <div title="successfully uploaded" v-if="isSuccess(status)">-->
<!--            <i class="el-icon-upload-success el-icon-circle-check" :class="_roundIcons"></i>-->
<!--          </div>-->
<!--          <div title="fail upload" v-else>-->
<!--            <i class="el-icon-upload-error el-icon-error" :class="_roundIcons" aria-label="fail upload"></i>-->
<!--          </div>-->
<!--        </template>-->
<!--  -->
<!--        <div  v-if="removeEnabled"-->
<!--              role="button"-->
<!--              class="b-item-remove"-->
<!--              title="press delete to remove"-->
<!--              aria-label="press delete to remove">-->
<!--          <i class="el-icon-close" :class="_roundIcons" @click="onRemove($event, id, status)"></i>-->
<!--        </div>-->
<!--      </div>-->
<!--    </a>-->
<!--    -->
<!--    <div class="b-item__bottom" >-->
<!--      <div class="b-progress-bottom" v-if="showProgress">-->
<!--        <cvt-progress-->
<!--                class="b-file-progress"-->
<!--                :show-outset-progress="true"-->
<!--                height="3px"-->
<!--                bgColor="info"-->
<!--                :timeout="file.size"-->
<!--                :valueNow="progress">-->
<!--        </cvt-progress>-->
<!--      </div>-->
<!--    </div>-->
<!--  </li>-->


<!--</template>-->
<!--<script>-->
<!--  import { BItem } from '../../list/index'-->
<!--  import CvtProgress from '../../progress/Progress.vue';-->
<!--  import {STATUS} from '../helpers/shared-properties'-->
<!--  import { isFile } from '../../../../lib/utils/inspect';-->
<!--  -->
<!--  const NAME = 'BFileItem';-->
<!--  -->
<!--  export default {-->
<!--    name: NAME,-->
<!--    extends: BItem,-->
<!--    components: {-->
<!--      CvtProgress-->
<!--    },-->
<!--    inject: {-->
<!--      bList: {-->
<!--        default() /* istanbul ignore next */ {-->
<!--          return {}-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    data: () => ({-->
<!--      thumbnail: null-->
<!--    }),-->
<!--    model: {-->
<!--      prop: 'file',-->
<!--      event: 'change'-->
<!--    },-->
<!--    props: {-->
<!--      file: {-->
<!--        type: [Object, File],-->
<!--        default: null-->
<!--      },-->
<!--      timeout: {-->
<!--        type: Number,-->
<!--        default: 15000-->
<!--      },-->
<!--      status: {-->
<!--        type: String,-->
<!--        default: STATUS.PENDING-->
<!--      },-->
<!--      progress: {-->
<!--        type: Number,-->
<!--        default: 0-->
<!--      }-->
<!--    },-->
<!--    mounted() {-->
<!--      this.thumbnail = isFile(this.file)? URL.createObjectURL(this.file): this.file[this.thumbnailProp] || this.fallbackThumbnail-->
<!--    },-->
<!--    beforeUpdate() {-->
<!--      this.thumbnail = isFile(this.file)? URL.createObjectURL(this.file): this.file[this.thumbnailProp] || this.fallbackThumbnail-->
<!--    },-->
<!--    computed: {-->
<!--      showProgress() {-->
<!--        return this.status === STATUS.PENDING || this.status === STATUS.IN_PROGRESS-->
<!--      },-->
<!--      _iconsEnabled() {-->
<!--        return this.iconsEnabled && !this.thumbnailsEnabled-->
<!--      },-->
<!--      _roundIcons() {-->
<!--        if (this.thumbnailsEnabled) {-->
<!--          return ['el-icon-round ']-->
<!--        }-->
<!--        return []-->
<!--      },-->
<!--    },-->
<!--    methods: {-->
<!--      isSuccess(status) {-->
<!--        return status === STATUS.SUCCESS-->
<!--      },-->
<!--      onRemove(e, id, status) {-->
<!--        this.$emit('onRemove', id, status)-->
<!--      }-->
<!--    },-->
<!--  }-->
<!--</script>-->

