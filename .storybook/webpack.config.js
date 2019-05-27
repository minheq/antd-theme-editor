const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = ({ config }) => {
  // load custom variables for theme
  config.module.rules.push({
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

  return config;
};
