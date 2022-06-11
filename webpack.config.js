const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.js',
    output:{
        path : path.join(__dirname, dist),
        filename: "bundle.js"
    }, 
    module : {
        rules : [
        {
            test: /\.css$/,
            use: ['styles-loader', 'css-loader']
        },
        {
            test: /\.svg/,
            use: 'svg-url-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: 'file-loader'
        },

    ]
    },
    plugins: [
       new HtmlWebpackPlugin({
           template: './src/index.html'
       })
    ]
}