'use strict'
const path = require('path')
const defaultSettings = require('./src/shared/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'Doc.Digital' // page title

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    // watchOptions: {
    //   ignored: ['public/docs/**', 'public/media/**']
    // },
    // public: 'progress.localhost:80',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/vuetify-overrides.scss"
        `,
      },
      scss: {
        prependData: `
          @import "@/assets/styles/vuetify-overrides.scss";
        `,
      },
    },
  },
}
