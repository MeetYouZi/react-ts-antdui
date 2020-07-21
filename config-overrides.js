const {
  override,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    'style': path.resolve(__dirname, 'src/style'),
    'components': path.resolve(__dirname, 'src/components')
  }),
)
