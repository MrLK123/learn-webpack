const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const glob = require('glob');
function setMpa() {
    // 等价交换，炼金术不变的原则
    const entry = {}
    const htmlwebpackPlugins = []
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
    entryFiles.forEach(item => {
        const match = item.match(/src\/(.*)\/index\.js$/)
        const pageName = match[1]
        entry[pageName]=item;
        htmlwebpackPlugins.push(new HtmlWebpackPlugin({
            template:`./src/${pageName}/index.html`,
            filename:`${pageName}.html`,
            chunks:[pageName],
        }))
    })
    return {
        entry,
        htmlwebpackPlugins
    }
}
const { entry, htmlwebpackPlugins } = setMpa()
module.exports = {
    entry,
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
    plugins: [

        ...htmlwebpackPlugins
        , new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // new CleanWebpackPlugin()
    ]
}
