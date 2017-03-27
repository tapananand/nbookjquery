const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const target = process.env.NODE_ENV || "";
const PRODUCTION = "production";

function isProd() {
    return target === PRODUCTION;
}

let baseConfig = {
    devtool: isProd() ? "source-map" : "eval-source-map" ,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build/", isProd() ? "prod" : "dev"),
        filename: isProd() ? "nbook.min.js" : "nbook.js"
    },
    module: {
        rules: [
            { 
                enforce: "pre",
                test: /\.js$/,
                exclude: [
                    "/node_modules"
                ],
                loader: "eslint-loader"
            },
            { 
                test: /\.js$/, 
                exclude: [
                    "/node_modules"
                ],
                loader: "babel-loader", 
                options: {
                    presets: ["env"]
                } 
            }
        ]
    },
    plugins: getPlugins(target)
};

function getPlugins() {
    let plugins = [];
    addCommonPlugins(plugins);

    if(isProd()) {
        addProdPlugins(plugins);
    }
    else {
        addDevPlugins(plugins);
    }

    return plugins;
}

// Adds plugins required for both dev and prod
// Some options may differ based on the target though
function addCommonPlugins(plugins) {
    addHTMLWebPackPlugin(plugins);
    addDefinePlugin(plugins);
}

function addHTMLWebPackPlugin(plugins) {
    let options = {
        title: "Nbook"
    };
    if(isProd()) {
        options.minify = {
            removeComments: true
        }
    }

    plugins.push(new HtmlWebpackPlugin(options));
}

function addDefinePlugin(plugins) {
    plugins.push(new webpack.DefinePlugin({
        PRODUCTION: isProd() ? "true" : "false"
    }));
}

function addProdPlugins(plugins) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true
        }
    }))
}

function addDevPlugins(plugins) {
    return ;
}

function addTargetSpecificConfig() {
    if(!isProd()) {
        baseConfig.devServer = {
            compress: true,
            contentBase: path.join(__dirname, "build"),
            port: 9090
        }
    }
}

addTargetSpecificConfig();

module.exports = baseConfig;
