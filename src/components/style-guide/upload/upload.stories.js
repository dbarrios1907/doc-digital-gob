import Vue from '../../lib/utils/vue'
import { getComponentConfig } from '../../lib/utils/config'
import { boolean, withKnobs, text, number, array, optionsKnob as options } from '@storybook/addon-knobs'
import { BUploadPlugin} from '../../components/bootstrap/upload/index.js'
import {BListPlugin} from '../../components/bootstrap/list/index'
import { action } from '@storybook/addon-actions';
import { File } from '../../lib/utils/safe-types';
import { warn } from '../../lib/utils/warn';
import { isArray, isFile, isUndefinedOrNull } from '../../lib/utils/inspect';
Vue.use(BListPlugin);
Vue.use(BUploadPlugin);

export default {
  title: 'Bootstrap|Upload',
  decorators: [withKnobs, () => ({
    template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  })]
};


export const FileList = () => ({
  template: `
      <div class="d-flex flex-column text-md-center justify-content-lg-start">
        <b-file-list
          :files="files"
          :removeEnabled="removeEnabled"
          :thumbnailsEnabled="thumbnailsEnabled"
          :iconsEnabled="iconsEnabled"
          :thumbnailProp="thumbnailProp"
          :descriptionProp="descriptionProp"
          :fallbackIcon="fallbackIcon"
          :fallbackThumbnail="fallbackThumbnail"
          @onRemove="onRemoveClick"
        ></b-file-list>
      </div>
    `,
  props: {
    removeEnabled: {
      default: boolean('item remove enabled', true)
    },
    thumbnailsEnabled: {
      default: boolean('thumbnails enabled', true)
    },
    iconsEnabled: {
      default: boolean('icons enabled', false)
    },
    thumbnailProp: {
      default: text('prop name to get thumbnails from item list', 'thumbnail')
    },
    descriptionProp: {
      default: text('prop name to get description from item list', 'name')
    },
    fallbackIcon: {
      default: text('icon fallback if not found', 'el-icon-document')
    },
    fallbackThumbnail: {
      default: text('thumbnails picture fallback if not found', 'http://longwoodinteriors.com/wp-content/uploads/2014/04/placeholder3.png')
    },
    files: {
      default: [{
        thumbnail: 'https://ae01.alicdn.com/kf/HTB1gXaPXffsK1RjSszgq6yXzpXau/Mochila-Original-Xiaomi-mi-colorida-10L-tama-o-peque-o-hombro-8-colores-165g-peso-deporte.jpg_50x50.jpg',
        name: 'this is a very long wrapping list item text'
      }, {
        thumbnail: 'https://ae01.alicdn.com/kf/HTB1gXaPXffsK1RjSszgq6yXzpXau/Mochila-Original-Xiaomi-mi-colorida-10L-tama-o-peque-o-hombro-8-colores-165g-peso-deporte.jpg_50x50.jpg',
        name: 'Second listed item'
      }, {
        thumbnail: 'https://ae01.alicdn.com/kf/HTB1gXaPXffsK1RjSszgq6yXzpXau/Mochila-Original-Xiaomi-mi-colorida-10L-tama-o-peque-o-hombro-8-colores-165g-peso-deporte.jpg_50x50.jpg',
        name: 'Third listed item'
      }, {
        thumbnail: 'https://ae01.alicdn.com/kf/HTB1gXaPXffsK1RjSszgq6yXzpXau/Mochila-Original-Xiaomi-mi-colorida-10L-tama-o-peque-o-hombro-8-colores-165g-peso-deporte.jpg_50x50.jpg',
        name: 'Fourth listed item'
      }]
    }
  },
  methods: {
    onRemoveClick: action('onRemove'),
  }
})
// 'http://longwoodinteriors.com/wp-content/uploads/2014/04/placeholder3.png'
export const Upload = () => ({
  template: `
      <div class="">
        <b-upload class="mt-3" multiple 
          :removeEnabled="removeEnabled"
          :iconsEnabled="iconsEnabled"
          :thumbnailsEnabled="thumbnailsEnabled"
          :manual-upload="manualUpload"
          :plain="plain"
          :disabled="disabled"
          :limit="limit"
          :accept="accept || null"
          :multiple="multiple"
          :webkitdirectory="directory"
        ></b-upload>
      </div>
    `,
  props: {
    files: {
      default: null
    },
    plain: {
      type: Boolean,
      default: boolean('plain', false)
    },
    disabled: {
      type: Boolean,
      default: boolean('disabled', false)
    },
    multiple: {
      type: Boolean,
      default: boolean('multiple', true)
    },
    directory: {
      type: Boolean,
      default: boolean('directory', true)
    },
    limit: {
      type: Number,
      default: number('limit', 10000)
    },
    accept: {
      type: String,
      default: text('accept', '*')
    },
    manualUpload: {
      type: Boolean,
      default: boolean('manual upload', false)
    },
    removeEnabled: {
      type: Boolean,
      default: boolean('remove enabled', true)
    },
    thumbnailsEnabled: {
      type: Boolean,
      default: boolean('thumbnails enabled', true)
    },
    iconsEnabled: {
      type: Boolean,
      default: boolean('icons enabled', false)
    },
    fallbackIcon: {
      type: String,
      default: 'el-icon-document'
    },
    iconProp: {
      type: String,
      default: text('icon prop', 'el-icon-document')
    },
  },
});
