const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.tsx',
	output: {
		filename: './dist/bundle.js',
		path: __dirname,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		contentBase: __dirname + '/public',
		port: 5000,
		watchContentBase: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, './src/components'),
				use: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true,
						},
					},
				],
			},
		],
	},
};
