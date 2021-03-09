import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

 class Index extends Component {
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

  goToFa = () => {
    Taro.navigateTo({
      url: '/pages/search/search'
    })
  }
  render () {
    return (
      <View className='index'>
        <Text>订单</Text>
        <AtButton type='primary' >查订单</AtButton>
      </View>
    )
  }
}

export default Index;