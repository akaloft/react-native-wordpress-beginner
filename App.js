import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import DrawerContainer from './component/drawerContainer';

//Screens && Ekranlar
import Home from './screens/home';
import Post from './screens/post';
import Category from './screens/category';

const StackNavigator = createStackNavigator({
  Home: { screen: Home },
  Post: { screen: Post },
  Category: { screen: Category }
})

const Drawer = createDrawerNavigator({
  Home: { screen: StackNavigator },
  Post: { screen: StackNavigator },
  Category: { screen: StackNavigator }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  })

const WordpressApp = createAppContainer(Drawer)

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WordpressApp />
      </View>
    )
  }
}
