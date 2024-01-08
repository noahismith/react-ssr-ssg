const path = require('path');

const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    resolve: {
        fullySpecified: false,
    },
};

const clientConfig = {
    target: 'web',
    entry: './src/client/index.jsx',
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [babelLoader],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

const serverConfig = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.cjs',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [babelLoader],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

module.exports = [clientConfig, serverConfig];
