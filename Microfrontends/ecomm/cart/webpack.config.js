const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8082
	},
	plugins: [
		new ModuleFederationPlugin({
            name: 'cart',
			filename: 'remoteEntry.js',
			// which modules/files inside of the project that we're going to expose
            exposes: {
                './CartShow': './src/bootstrap'
            },
            //this sees if any other application has already loaded the faker module
            // if it has, then we'll load a pre-loaded copy of faker
			shared: ['faker'],
		}),
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
}