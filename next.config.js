const swPrecheWebpackPlugin = require('sw-precache-webpack-plugin')
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new swPrecheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}