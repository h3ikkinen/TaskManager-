// vue.config.js
module.exports = {
    // настройки...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/' ,
    assetsDir: 'assets',
    productionSourceMap: false,
}