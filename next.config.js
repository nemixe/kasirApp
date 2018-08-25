const withCSS = require('@zeit/next-css')
const swPrecheWebpackPlugin = require('sw-precache-webpack-plugin')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

module.exports = withCSS({
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
})