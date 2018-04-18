// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // load custom variables for theme
  config.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  });

  return config;
};
