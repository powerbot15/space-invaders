const path = require('path');

module.exports = {
    entry: './app/app-director.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets : ['es2015']
                }
            }
        ]
    }
};