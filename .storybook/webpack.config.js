const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = (baseConfig, env, defaultConfig) => {
  // load custom variables for theme
  defaultConfig.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      },
    ],
  });

  return defaultConfig;
};
