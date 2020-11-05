const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path");
const fileListWebpackPlugin = require("./myPlugins/fileListWebpackPlugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 8081,
        hot: true, //开启热模块替换
        hotOnly: true
    },
    mode: "development",
    module: {
        rules: [ // 处理css
            {
                test: /\.css$/i,
                use: ['vue-style-loader', 'css-loader']
            },
            // 处理vue
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            // 处理less
            {
                test: /\.less$/i,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            // 小图片转为base64
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            // 处理es6
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 多媒体文件
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,

                }
            }, // 处理字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,

                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.esm',
            '@': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    }), new webpack.HotModuleReplacementPlugin(), new VueLoaderPlugin(), new fileListWebpackPlugin({ options: { name: 'tom' } })]
};