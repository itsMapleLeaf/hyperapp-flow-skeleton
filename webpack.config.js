const {resolve} = require('path')

module.exports = function (env = {}) {
  return {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'out'),
      publicPath: '/out/',
    },
    module: {
      rules: [
        { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      ]
    }
  }
}
