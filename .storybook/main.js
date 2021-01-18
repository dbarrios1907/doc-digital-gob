const VuetifyLoaderPlugin = require('vuetify-loader');

const path = require('path');

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
      test: /\.s(c|a)ss$/,
      sideEffects: true,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            prependData: "@import '@/assets/styles/main.scss'",
            sassOptions: {
              // fiber: require('fibers'),
              indentedSyntax: true // optional
            },
          },
        }
      ]
    });

    config.module.rules.push({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          vue: 'vue/dist/vue.js',
          'vue$': 'vue/dist/vue.esm.js',
        },
      },
    });

    return config;
  },
};
