<template>
  <div class="b-upload">
    <dx-button color="primary" outlined @click="onSelectionClick" class="btn-upload">
      <div class="btn-upload-content">
        <dx-icon right regular> mdi-cloud-upload-outline </dx-icon>
        <span class="text-underline">Cargar archivo</span>
      </div>
    </dx-button>

    <input
      class="b-upload-input"
      ref="input"
      type="file"
      :id="_id"
      :name="name"
      :disabled="disabled"
      :capture="capture || null"
      :accept="accept || null"
      :multiple="multiple"
      :uploadThreads="uploadThreads"
    />

    <FileList :files="stackedFiles" :upload-handler="uploadHandler" descriptionProp="name" :upload-threads="uploadThreads"> </FileList>
  </div>
</template>

<script>
import FileList from './components/FileList'
import FormFileMixin from './mixins/form-file'
import UploadInputMixing from './mixins/upload-inputs'
import { isFile } from '@/shared/utils/inspect'
import { idMixin } from '@/shared/mixin/id'

export default {
  name: 'Upload',
  components: {
    FileList,
  },
  provide() {
    return {
      upload: this,
    }
  },
  mixins: [FormFileMixin, UploadInputMixing, idMixin],
  props: {
    manualUpload: Boolean,
    fileNameFormatter: {
      type: Function,
      default: file => {
        console.log(file)
      },
    },
    uploadThreads: {
      type: Number,
      default: 1,
    },
    uploadHandler: {
      type: Function,
      default: null,
    },
    beforeUpload: {
      type: Function,
      default: () => true,
    },
    beforeRemove: {
      type: Function,
      default: () => true,
    },
    onRemove: {
      type: Function,
      default: null,
    },
    onSuccess: {
      type: Function,
      default: () => {},
    },
    onError: {
      type: Function,
      default: () => {},
    },
    onExceed: {
      type: Function,
      default: () => {},
    },
    onProgress: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      stackedFiles: [],
    }
  },
  watch: {
    plain() {
      this.removeListeners()
      this.addListeners()
    },
    manualUpload() {
      this.removeListeners()
      this.addListeners()
    },
    noDrop() {
      this.removeListeners()
      this.addListeners()
    },
  },
  computed: {
    _id() {
      return this.safeId()
    },
  },
  mounted() {
    this.addListeners()
  },
  beforeDestroy() {
    this.removeListeners()
  },
  methods: {
    onSelectionClick() {
      this.$refs.input.click()
    },
    detectFileChanges(files) {
      if (Array.isArray(files) && files.length > 0) {
        this.stackedFiles = files
      } else if (isFile(files)) {
        this.stackedFiles = [files]
      }
      this.$refs.input.value = ''

      console.log(files)
    },
    addListeners() {
      // listen for new added files
      // send new files to FileList component for upload handling and archived
      this.$on('input', this.detectFileChanges)
      this.$refs.input.addEventListener('change', this.onFileChange)
      this.$refs.input.addEventListener('focusin', this.focusHandler)
      this.$refs.input.addEventListener('focusout', this.focusHandler)
      this.$refs.input.addEventListener('reset', this.onReset)
    },
    removeListeners() {
      this.$off('input')
      this.$refs.input.removeEventListener('change', this.onFileChange)
      this.$refs.input.removeEventListener('focusin', this.focusHandler)
      this.$refs.input.removeEventListener('focusout', this.focusHandler)
      this.$refs.input.removeEventListener('reset', this.onReset)
    },
  },
}
</script>

<style lang="scss">
.btn-upload {
  .btn-upload-content {
    i {
      padding: 0 !important;
      margin: 0 !important;
      margin-right: 5px !important;
    }
  }
}

.b-upload {
  width: max-content;
  position: relative;
}

.b-upload-input {
  display: none;
  width: 100%;
}
</style>
