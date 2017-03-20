const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const sourcePath = 'src'
const outPath = 'out'

module.exports = function (env = {}) {
  return {
    entry: `./${sourcePath}/main.js`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, outPath),
    },
    module: {
      rules: [
        { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      ]
    },
    plugins: [
      new HtmlPlugin({ template: `./${sourcePath}/index.html` })
    ],
    devtool: 'source-map'
  }
}
