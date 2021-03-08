import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  onShareAppMessage() {
    return {
      title: '发货管家',
      path: '/index/index',
      imageUrl: ''
    }
  }

  render () {
    return (
      <View className='index'>

      </View>
    )
  }
}
