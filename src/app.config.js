export default {
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/send/index',
    'pages/order/index',
    'pages/mine/index'
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
      pagePath: 'pages/search/index',
      text: '查单'
    },{
      'iconPath': 'resource/node.png',
      'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/send/index',
      text: '发货'
    },{
      'iconPath': 'resource/hotest.png',
      'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/order/index',
      text: '订单'
    },{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/mine/index',
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