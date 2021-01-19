module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/main.scss";
        `
      }
    }
  }
};
