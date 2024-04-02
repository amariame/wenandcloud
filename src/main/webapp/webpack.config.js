const webpack = require('webpack');
var path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.ProvidePlugin({
            m: "mithril",
            data: [path.resolve(__dirname, 'petitions/login.js'), 'data'],
        }),
    ]
}
