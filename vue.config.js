module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/main.scss"
        `
      },
      scss: {
        prependData: `
          @import "@/assets/styles/main.scss";
        `
      }
    }
  }
};
