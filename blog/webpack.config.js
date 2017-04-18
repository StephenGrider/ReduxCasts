module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loaders: ['eslint'],
            exclude: '/node_modules/'
        }],
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
