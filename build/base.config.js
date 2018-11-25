const isProd = process.env.NODE_ENV === 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const config = {
    // Include source maps in development files
    devtool: isProd ? false : '#cheap-module-source-map',

    entry: {
        // Main entry point of our app
        app: resolve(__dirname, '..', 'src', 'index.js'),
    },

    output: {
        // Build files are stored in dist
        path: resolve(__dirname, '..', 'dist'),

        // We serve assets directly from root
        publicPath: '/',

        // We add hash to filename to avoid caching issues
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['*', '.js'],
        modules: [
            resolve(__dirname, '..', 'node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',

                // Dependencies do not require transpilation
                exclude: /node_modules/
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],
}

if (!isProd) {
    config.devServer = {
        contentBase: resolve(__dirname, '..', 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    }
}

new HtmlWebpackPlugin({
    title: 'SPASock Base',
    template: resolve(__dirname, '..', 'src', 'html', 'index.ejs'),
}),

    module.exports = config