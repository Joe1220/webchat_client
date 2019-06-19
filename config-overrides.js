const { 
  override, overrideDevServer,addDecoratorsLegacy, disableEsLint, watchAll
} = require('customize-cra')

module.exports = {
  webpack: override(
    disableEsLint(),
    addDecoratorsLegacy()
  ),
  devServer: overrideDevServer(
    watchAll()
  )
}