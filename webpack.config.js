const path = require('path')

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
    }
  }
}
