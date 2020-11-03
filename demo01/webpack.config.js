const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // 默认
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    // 以下是基本配置，webpack无默认配置
    mode: 'development',
    // 加载不同模块借助不同loader,webpack本身只能识别.js和.json文件
    // 其他后缀文件需要对应loader解析
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // 功能扩展
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })]
}