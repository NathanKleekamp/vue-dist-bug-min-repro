const path = require('path');
const distPath = path.resolve(__dirname, 'otherLocation');

module.exports = {
  chainWebpack: config => {
  config
    .output
      .path(distPath)
    }
};
