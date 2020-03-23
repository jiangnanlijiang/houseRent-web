module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8099,
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
