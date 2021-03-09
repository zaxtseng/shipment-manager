export default {
  pages: [
    'pages/index/index',
    'pages/search/search',
    'pages/send/send',
    'pages/order/order',
    'pages/mine/mine'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '首页'
    },{
      'iconPath': 'resource/hotest.png',
      'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/search/search',
      text: '查单'
    },{
      'iconPath': 'resource/node.png',
      'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/send/send',
      text: '发货'
    },{
      'iconPath': 'resource/hotest.png',
      'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/order/order',
      text: '订单'
    },{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
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