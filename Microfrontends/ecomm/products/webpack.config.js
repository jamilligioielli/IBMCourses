//This will set the webpack js file names in the HTML script tag
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8081
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			// which modules/files inside of the project that we're going to expose
			exposes: {
				'./ProductsIndex': './src/bootstrap'
			},
			//this sees if any other application has already loaded the faker module
			// if it has, then we'll load a pre-loaded copy of it
			shared: ['faker']
		}),
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
}