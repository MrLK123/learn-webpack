const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            // {
            //     test: /\.js$/,
            //     use: [{
            //         loader: 'replace-loader',
            //         options: {
            //             name: '老刘'
            //         }
            //     }]
            // },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.sass$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.less$/,
                use: [
                   "kstyle-loader","kcss-loader","kless-loader"
                //    可以做，但没必要
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: true
                    //     }
                    // },
                    // 'style-loader',
                    // 'css-loader', 'postcss-loader', 'less-loader'
                ]
            }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })
        // , new MiniCssExtractPlugin()
    ]
}
