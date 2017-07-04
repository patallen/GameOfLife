const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject : "body"
        })
    ]
};
