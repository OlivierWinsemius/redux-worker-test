/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'js', 'index.js'),
    },

    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[chunkhash].chunk.js',
    },

    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' },
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
};
