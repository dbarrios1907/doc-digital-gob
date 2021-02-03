import { pluginFactory } from '@/shared/utils/plugins'
import * as _styleGuideComponents from '@/components/style-guide';
import { isVueComponent } from 'eslint-plugin-vue/lib/utils';

const components = Object.keys(_styleGuideComponents).reduce((acc, key) => {
  if (isVueComponent(_styleGuideComponents[key])) {
    acc[key] = _styleGuideComponents[key]
  }
  return acc
}, {})

const StyleGuidePlugin = /*#__PURE__*/ pluginFactory({
  components
})

export default StyleGuidePlugin;
