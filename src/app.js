import { Component } from 'react'
// import Taro from '@tarojs/taro'

import './app.scss'

class App extends Component {

  render () {
    return this.props.children
  }
}

// Taro.render(<App />, document.getElementById('app'))
export default App
