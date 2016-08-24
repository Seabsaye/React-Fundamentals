var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

//'source-map' makes it so that stack erros on console point to index files NOT index bundle, so know where error occured in code written
//automatically detected by sentry
module.exports = {
	devtool: 'source-map',
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};
