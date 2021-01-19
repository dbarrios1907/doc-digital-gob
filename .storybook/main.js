const VuetifyLoaderPlugin = require('vuetify-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const cssLoaders = [
  'vue-style-loader',
  'style-loader',
  { loader: 'css-loader', options: { sourceMap: true } },
  // { loader: 'postcss-loader', options: { sourceMap: true } }
];

const sassLoaders = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass'),
    prependData: `@import '@/assets/styles/main.scss'`,
    sassOptions: {
      indentedSyntax: true
    }
  }
};

const scssLoaders = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass'),
    prependData: `
      @import '@/assets/styles/main.scss';
    `,
    sassOptions: {
      indentedSyntax: false
    }
  }
};

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.js?$/], // This is default
          include: [path.resolve(__dirname, './components')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }
  ],
  webpackFinal: config => {
    // console.log(config.module.rules.filter(v => v.test.toString().includes('.css'))[0].use[1].options);
    config.module.rules.push({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          vue: 'vue/dist/vue.js',
          'vue$': 'vue/dist/vue.esm.js',
        },
      },
    });

    config.module.rules.push({
      test: /\.sass$/,
      sideEffects: true,
      use: [
        ...cssLoaders,
        sassLoaders,
      ]
    });

    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        ...cssLoaders,
        scssLoaders,
      ]
    });
    return config;
  },
};
