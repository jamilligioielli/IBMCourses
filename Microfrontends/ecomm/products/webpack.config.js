//This will set the webpack js file names in the HTML script tag
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        port:8081
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
};