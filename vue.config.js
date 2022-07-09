const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
  devServer: {
    // proxy: {
    //   '^/api': {
    //     target: 'http://3.87.62.180/',
    //     changeOrigin: true
    //   },
    // }
  },


})
