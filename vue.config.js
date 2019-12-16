const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const APP_PUBLIC_PATH = process.argv[process.argv.length - 1].startsWith('--')
  ? 'http://websitedn.yiautos.com/' + process.argv[process.argv.length - 1].substring(2)
  : './';

console.log('APP_PUBLIC_PATH==>', APP_PUBLIC_PATH);

module.exports = {
  publicPath: APP_PUBLIC_PATH,
  css: {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
};
