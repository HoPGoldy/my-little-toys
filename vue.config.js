// vue.config.js
module.exports = {
  // 选项...
  baseUrl: './',
  outputDir: 'docs',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      // 'element-ui': 'ElementUI',
    }
  }
}