const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader'
            },
            {
                test:/\.scss$/,
                use: [
                    "style-loader", // inject the CSS information on the page
                    "css-loader", // translates CSS into CommonJS info
                    "sass-loader" // compiles SASS to CSS
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.ico'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    devtool: 'source-map'
}