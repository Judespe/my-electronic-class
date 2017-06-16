var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

let production = process.argv.indexOf("--production") > -1;

module.exports = {

	entry: {
		// Point(s) d'entrée de l'app
		index: [
			"./src/index.js",
		],
	},

	output: {
		// emplacement de sortie, ici ./dist
		path: path.join(__dirname, "dist"),
		// cf. entrée, ici ./dist/index.js
		filename: "[name].js",
		// url de base
		publicPath: "/",
	},

	resolve: {
		// extensions à résoudre lors d'un import
		extensions: [
		"",
		".js",
		".json",
		],
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					"babel",
					"eslint",
				],
			},
			{
				test: /\.json$/,
				loaders: [
					"json",
				],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style", "css!cssnext"),
			},
			{
				test: /\.(ico|jpe?g|png|gif)$/,
				loaders: [
				"file?name=[path][name].[ext]&context=./src",
				],
			},
			{
				test: /\.(woff|ttf|otf|eot\?#.+|svg#.+)$/,
				loaders: [
				"file?name=[path][name].[ext]&context=./src",
				],
			},
			{
				test: /\.(html|txt)$/,
				loaders: [
				"file?name=[path][name].[ext]&context=./src",
				],
			},
		],
	},

	plugins: (
		[
			new ExtractTextPlugin("[name].css", {disable: !production}),
			new webpack.DefinePlugin({
				__PROD__: production
			}),
		]
		.concat(
			production ? [
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
					},
				}),
			] : []
		)
	),

	// config supplémentaire du module cssnext
	cssnext: {
		sourcemap: !production,
		compress: production,
	},

}