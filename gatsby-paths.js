const path = require('path')

module.exports =     {
  resolve: 'gatsby-plugin-root-import',
  options: {
    '@': path.join(__dirname, 'src'),
  }
}
