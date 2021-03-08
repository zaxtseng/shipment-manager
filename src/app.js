import Taro, { Component } from '@tarojs/taro'

import Index from './pages/index'

import './app.scss'

class App extends Component {

config = {
  pages: [
    'pages/index/index',
    'pages/search/search',
    'pages/send/send',
    'pages/order/order',
    'pages/mine/mine'
  ],
  tabBar: {
    list: [{
      'iconPath': '',
      'selectedIconPath': '',
      pagePath: 'pages/index/index',
      text: '首页'
    },{
      'iconPath': '',
      'selectedIconPath': '',
      pagePath: 'pages/search/search',
      text: '查单'
    },{
      'iconPath': '',
      'selectedIconPath': '',
      pagePath: 'pages/send/send',
      text: '发货'
    },{
      'iconPath': '',
      'selectedIconPath': '',
      pagePath: 'pages/order/order',
      text: '订单'
    },{
      'iconPath': '',
      'selectedIconPath': '',
      pagePath: 'pages/mine/mine',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#6190e8',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black'
  }
}
  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
