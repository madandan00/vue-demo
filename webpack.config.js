var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');
//var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/prd/',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.css$/,
			use: [
			'style-loader',
			'css-loader'
			]
		}, {
			test: /\.scss$/,
			use: ['style-loader','css-loader','sass-loader']
		}, {
			test: /\.js$/,
			use: ['babel-loader']
		}, {
			test: /\.vue$/,
			use: ['vue-loader']
		}, {
			test: /\.(html|tpl)$/,
			use: ['html-loader']
		}]
	},
	devServer: {
		contentBase: __dirname + '/prd',
		port: 8080,
		host: 'localhost',
		inline: true,
	}

}