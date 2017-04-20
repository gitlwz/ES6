var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app:path.join(__dirname, 'src')
    },
    output: {
        path: path.join(__dirname),
        filename: 'dist/[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    }
};
