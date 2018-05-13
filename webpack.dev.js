/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'dev'),
    },

    devtool: 'eval-source-map',

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist', 'dev'),
        watchContentBase: true,
        host: '0.0.0.0',
        overlay: true,
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist', 'dev')]),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
});
