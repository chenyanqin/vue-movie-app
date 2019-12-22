const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	publicPath: './',
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
