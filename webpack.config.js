const path = require('path');

const clientConfig = {
    target: 'web',
    entry: './src/index.jsx',
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
        ],
    },
};

const serverConfig = {
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
        ],
    },
};

module.exports = [clientConfig, serverConfig];
