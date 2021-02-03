import BUpload from './upload.vue'
import BFileList from './components/file-list.vue'
import { pluginFactory } from '@/shared/utils/plugins'

const BUploadPlugin = /*#__PURE__*/ pluginFactory({
  components: {
    BUpload,
    BFileList,
  }
})

export { BUploadPlugin, BUpload, BFileList }
