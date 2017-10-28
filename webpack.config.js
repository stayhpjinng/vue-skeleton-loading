const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');



var config = {
    entry: './demo/main.js',
    output: {
        path: path.resolve(__dirname, './docs'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
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
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:[
                    {loader: 'file-loader'},
                    {loader: 'url-loader'}
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]

    },
    resolve: {
        alias: {
            'vue-skeleton-loading': path.resolve(__dirname, './src'),
            'vue': 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.vue']
    },
    devServer: {
    },
    plugins: [],
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    config.devtool = '#source-map';
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]);

    if (process.env.BUILD === 'publish') {
        config.entry = './src/index.js';
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: 'vue-skeleton-loading.js',
            library: 'VueSkeletonLoading',
            libraryTarget: 'umd'
        }
    }

}

module.exports = config;