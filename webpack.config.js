var path = require('path');

module.exports = {
	entry:path.resolve(__dirname, 'public') + '/src/index.js',
	output: {
		path:path.resolve(__dirname, 'public') + '/dist/',
		filename: 'bundle.js'
	},
	// devServer: {
	// 	inline:true,
	// 	contentBase: path.resolve(__dirname, 'public') + '/src/index.js',
	// 	port:4000
	// },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}