import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

export default class Search extends Component {

   config = {
       navigationBarTitleText: '订单'
  }

  state={}


  render() {
    return (
      <View>
           <Text>订单</Text>
      </View>
    );
  }
}
