
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.cbddev.xyz',
          ws: true,
          changeOrigin: true
        }

      }
    }
}
