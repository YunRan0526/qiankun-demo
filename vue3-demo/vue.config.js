const { name } = require('./package');

module.exports = {
    outputDir: `../dist/${name}`,
    publicPath: "/",
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        // 关闭主机检查，使微应用可以被 fetch
        disableHostCheck: true,
        historyApiFallback: true,
        port: 9528
    },
    configureWebpack: {
        output: {
            library: `${name}`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};