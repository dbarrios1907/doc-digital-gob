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
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   sideEffects: true,
    //   use: ['style-loader',
    //     {
    //       loader: require.resolve('css-loader'),
    //       options: {
    //         esModule: true,
    //         sourceMap: true,
    //         importLoaders: 2,
    //         modules: {
    //           compileType: "module",
    //           localIdentName: '[name]__[local]--[hash:base64:5]',
    //           auto: true
    //         },
    //       }
    //     },
    //     'sass-loader', 'postcss-loader'],
    // });
    return config;
  },
};
