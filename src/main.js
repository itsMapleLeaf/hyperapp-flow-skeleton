// @flow
import {app} from 'hyperapp'

function render () {
  const root = document.getElementById('app')
  if (root) {
    root.innerHTML = ''
    app({ ...require('./app'), root })
  }
}

declare var module: any
if (module.hot) {
  module.hot.accept('./app', render)
}
render()
