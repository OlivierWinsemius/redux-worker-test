/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'prod'),
    },

    plugins: [
        new UglifyPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist', 'prod')]),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    ],
});
