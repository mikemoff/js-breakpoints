const path = require('path');

module.exports = {
  'files': [
    './icons/*svg'
  ],
  'fontName': 'iconfont',
  'classPrefix': 'iconfont-',
  'baseSelector': '.iconfont',
  'types': ['woff','woff2', 'eot','ttf','svg'],
  'fileName': './fonts/app.[fontname].[hash].[ext]',
  'cssTemplate': './styles/iconfont.hbs'
};
