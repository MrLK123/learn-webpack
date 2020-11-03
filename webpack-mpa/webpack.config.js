const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: 'development',
    // 配置这个
    resolveLoader: {
        modules: ['node_modules', 'myLoader']
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: "[name][hash].[ext]",
                        outputPath: 'image',
                        publicPath: '../image',
                        limit: 1024 * 70
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font',
                        publicPath: '../font'
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"

                ]
            }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index']
    })
        , new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // new CleanWebpackPlugin()
    ]
}
