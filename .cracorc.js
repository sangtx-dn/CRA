module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: (
          { webpackConfig }
        ) => {
          const newWebpackConfig = Object.assign({}, webpackConfig)
          // Override here
          return newWebpackConfig
        }
      },
      options: {}
    }
  ]
}
