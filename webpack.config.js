const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
require("babel-polyfill");

const environment = process.env.NODE_ENV !== "production";


module.exports = {
	mode: environment ? "development" : "production",
	entry: {
		index: ["babel-polyfill", path.resolve("./app/src/index.tsx")]
	},
	output: {
		filename: "principal.js",
		path: __dirname + "/app/dist",
		publicPath: "/"
	},
	devServer: {
		contentBase: __dirname + "/app/dist",
        port: 3000,
        historyApiFallback: true
	},
	resolve: {
		
		extensions: [ '.tsx', '.ts', '.js' ],
		plugins: [
		  new TsconfigPathsPlugin({
			baseUrl: __dirname,
			extensions: [".js", ".ts", ".tsx"],
		  }),
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
		  new TerserPlugin({
			cache: true,
		  }),
		],
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
					const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
					return `npm.${packageName.replace('@', '')}`;
					},
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			minify: {
				html5: true,
				collapseWhitespace: true,
				removeComments: true
			},
			filename: "index.html",
			template: __dirname + "/main.html"
		})
    ],
    module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]' ,
						publicPath: `/static/`,
						outputPath: './static'
					}
				  },
				],
			},
		]
	}
};