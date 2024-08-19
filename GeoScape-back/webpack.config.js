const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production', // Use 'development' if you're in development mode
    entry: './index.js', // Your entry point
    target: 'node', // Target node environment
    resolve: {
        fallback: {
            "fs": false, // Node core modules not available in browser
            "path": require.resolve("path-browserify"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "url": require.resolve("url/")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
