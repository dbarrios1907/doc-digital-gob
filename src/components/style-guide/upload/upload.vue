<template>
  <div class="b-upload" :class="{ disabled }">
    <template v-if="manualUpload">
      <button class="btn btn-primary" @click="onSelectionClick"><span>select file</span></button>
      <button class="btn btn-success" @click="onUploadClick"><span>Click to upload</span></button>
      <div class="b-upload__tip">{{ accept }} files with a size less than 500kb</div>
    </template>
    <template v-else-if="plain">
      <button class="btn btn-primary" @click="onSelectionClick"><span>Click to upload</span></button>
      <div class="b-upload__tip">{{ accept }} files with a size less than 500kb</div>
    </template>
    <template v-else>
      <div class="d-flex flex-column justify-content-center align-items-center b-upload-dropper">
        <i class="el-icon-upload"></i>
        <div class="b-dropper__text">Drop file here or <a @click="onSelectionClick">click to upload</a></div>
      </div>
    </template>

    <b-file-list
      :files="stackedFiles"
      :removeEnabled="removeEnabled"
      :iconsEnabled="iconsEnabled"
      :thumbnailsEnabled="thumbnailsEnabled"
      :fallbackThumbnail="fallbackThumbnail"
      :upload-handler="uploadHandler"
      descriptionProp="name"
      :autoUpload="!manualUpload"
      :upload-threads="uploadThreads"
    ></b-file-list>

    <input
      :class="_uploadInput"
      ref="input"
      type="file"
      :id="_id"
      :name="name"
      :disabled="disabled"
      :capture="capture || null"
      :accept="accept || null"
      :multiple="multiple"
      :action="action"
      :webkitdirectory="directory"
      :uploadThreads="uploadThreads"
    />
  </div>
</template>

<script>
import BFormFileMixin from './mixins/form-file'
import UploadInputMixing from './mixins/upload-inputs'
import BFileList from './components/file-list.vue'
import idMixin from '../../../lib/mixins/id'
import hasListenerMixin from '../../../lib/mixins/has-listener'
import normalizeSlotMixin from '../../../lib/mixins/normalize-slot'
import uploadInputsMixin from './mixins/upload-inputs'
import ItemBaseMixing from '../list/mixins/item-base'
import { getComponentConfig } from '../../../lib/utils/config'

import CvtButton from '../button/Button.vue'
import { isFile } from '../../../lib/utils/inspect'

const NAME = 'BUpload'

export default {
  name: NAME,
  components: {
    CvtButton,
    BFileList,
  },
  provide() {
    return {
      bUpload: this,
    }
  },
  mixins: [idMixin, normalizeSlotMixin, BFormFileMixin, ItemBaseMixing, UploadInputMixing],
  props: {
    dropPlaceholder: {
      type: String,
      default: () => getComponentConfig(NAME, 'dropPlaceholder'),
    },
    manualUpload: Boolean,
    fileNameFormatter: {
      type: Function,
      default: file => {
        console.log(file)
      },
    },
    action: {
      type: String,
      default: 'http://localhost:8080/fileupload',
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
    _uploadInput() {
      return this.plain || this.manualUpload ? 'b-upload-input' : 'b-upload-dropper b-input-dropper'
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
    onUploadClick(e) {
      this.$emit('upload')
    },
    detectFileChanges(files) {
      if (Array.isArray(files) && files.length > 0) {
        this.stackedFiles = files
      } else if (isFile(files)) {
        this.stackedFiles = [files]
      }
      this.$refs.input.value = ''
    },
    addListeners() {
      // listen for new added files
      // send new files to FileList component for upload handling and archived
      this.$on('input', this.detectFileChanges)
      this.$refs.input.addEventListener('change', this.onFileChange)
      this.$refs.input.addEventListener('focusin', this.focusHandler)
      this.$refs.input.addEventListener('focusout', this.focusHandler)
      this.$refs.input.addEventListener('reset', this.onReset)

      if (!this.plain && !this.noDrop) {
        this.$refs.input.addEventListener('dragover', this.onDragover)
        this.$refs.input.addEventListener('dragleave', this.onDragleave)
        this.$refs.input.addEventListener('drop', this.onDrop)
      }
    },
    removeListeners() {
      this.$off('input')
      this.$refs.input.removeEventListener('change', this.onFileChange)
      this.$refs.input.removeEventListener('focusin', this.focusHandler)
      this.$refs.input.removeEventListener('focusout', this.focusHandler)
      this.$refs.input.removeEventListener('reset', this.onReset)

      if (!this.plain && !this.noDrop) {
        this.$refs.input.removeEventListener('dragover', this.onDragover)
        this.$refs.input.removeEventListener('dragleave', this.onDragleave)
        this.$refs.input.removeEventListener('drop', this.onDrop)
      }
    },
  },
}
</script>

<style lang="scss">
$b-upload__dropper-margin: 1rem;

.b-upload-dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  position: relative;
  margin: $b-upload__dropper-margin;
  color: $gray-700;
  font-size: medium;

  .el-icon-upload {
    color: $gray-400;
    font-size: 4rem;
    display: block;
  }

  .b-dropper__text {
    position: relative;
    z-index: 1;

    a {
      color: $info;
      cursor: pointer;

      &:hover {
        color: $info;
      }
    }
  }
}

.dropper:hover {
  background-color: #eee;
}

.b-upload {
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid $light;
  position: relative;

  &.disabled {
    opacity: 0.5;
    @extend .select-none;

    * {
      @extend .pointer-none;
    }
  }
}

.b-upload-input {
  display: none;
}

.b-upload__tip {
  color: $blueish-grey;
  font-size: small;
  margin: 0.5rem 0;
}

.b-input-dropper {
  height: 30vh;
  position: absolute;
  top: $b-upload__dropper-margin * 2;
  width: calc(100% - #{$b-upload__dropper-margin * 4});
  left: $b-upload__dropper-margin * 2;
  margin: 0;
  opacity: 0;
}
</style>
