import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

 class Index extends Component {
   constructor(props){
     super(props)
     this.state = {
       // eslint-disable-next-line react/no-unused-state
       searchList: [
         {
           id: 1,
           name: '发快递',
           path: 'fakuaidi'
        },
         {
           id: 2,
           name: '发物流',
           path: 'fawuliu'
        },
         {
           id: 3,
           name: '查公司',
           path: 'chagongsi'
        },
         {
           id: 4,
           name: '查公司',
           path: 'chagongsi'
        },
         {
           id: 5,
           name: '查公司',
           path: 'chagongsi'
        },
         {
           id: 6,
           name: '查公司',
           path: 'chagongsi'
        },
         {
           id: 7,
           name: '查公司',
           path: 'chagongsi'
        },
         {
           id: 8,
           name: '查公司',
           path: 'chagongsi'
        },
        ]
     }
   }
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

  goToFa = (item) => {
    Taro.navigateTo({
      url: `/pages/search/index?path=${item.path}`
    })
  }
  render () {
    return (
      <View className='container'>
        <View className='search__title'>
          {this.state.searchList.map(item => (    
            <AtButton 
              type='primary'
              key={item.id}
              className='searchList_item'
              onClick={(e) => this.goToFa(item, e)}
            >{item.name}
            </AtButton>
          ))}
        </View>
        <View className='search__img'>1</View>
        <View className='search__img2'>2</View>
      </View>
    )
  }
}

class IconTitle extends Component {
  constructor(props){
    super(props)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      iconTitleList: [
        {
          id: 1,
          name: '发快递',
          path: 'fakuaidi'
       },
        {
          id: 2,
          name: '发物流',
          path: 'fawuliu'
       },
        {
          id: 3,
          name: '查公司',
          path: 'chagongsi'
       },
        {
          id: 4,
          name: '查公司',
          path: 'chagongsi'
       },
        {
          id: 5,
          name: '查公司',
          path: 'chagongsi'
       },
        {
          id: 6,
          name: '查公司',
          path: 'chagongsi'
       },
       ]
    }
  }
  render(){
    return (
      <View className='icon-container'>
        {this.state.iconTitleList.map(item =>(
          <View key={item.id}></View>
        ))}
      </View>
    )
  }
}

export default Index;