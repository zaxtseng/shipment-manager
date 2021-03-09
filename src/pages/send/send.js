import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

export default class Search extends Component {

   config = {
       navigationBarTitleText: '发货'
  }

  state={}

  render() {
    return (
      <View>
        <Text>发货</Text>
      </View>
    );
  }
}
