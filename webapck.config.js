const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, dist),
        publicPath: '/dist',
        name: 'skeleton-loading.min.js'
    },
    module: {
        rules: [
            {
                test: '/\.less$/',
                use: [
                    {loader: 'less-loader'},
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: '/\.vue$/',
                use: [
                    {loader: 'vue-loader'}
                ]
            },
            {
                test: '/\.(png|jpg|gif|svg)$/',
                use:[
                    {loader: 'file-loader'},
                    {loader: 'url-loader'}
                ]
            },
            {
                test: '/\.js$/',
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]

    },
    resolve: {
        alias: {
            'vue-skeleton-loading': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'skeleton-loading',
            filename: 'dist/index.html',
            inject: true,
            template: './index.html'
        })
    ]
}

module.exports = config;