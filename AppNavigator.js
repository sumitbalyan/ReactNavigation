import React, {Component}  from 'react';
import {Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
} from 'react-navigation'

import Login from './Login'
import HomeScreen from './Home'

class Feed extends Component {
  render() {
    return (
      <View>
        <Button title="Go to Detail Screen" onPress={()=>{
          this.props.navigation.navigate('Detail')
        }}></Button>
      </View>
    )
  }
}

class Detail extends Component {
  render() {
    return (
      <View>
        <Text> Detail </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    )
  }
}
class Settings extends Component {
  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    )
  }
}

const FeedStack= createStackNavigator({
Feed : {
  screen : Feed,
  navigationOptions:({navigation})=>{
    return {
      headerTitle:"Feed",
      headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
},
Detail : {
  screen : Detail,
  navigationOptions:({navigation})=>{
    return {
      headerTitle:"Detail"
    }
  }
}
})

const ProfileStack= createStackNavigator({
  Profile : {
    screen : Profile,
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Profile",
        headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
  })

const SettingsStack= createStackNavigator({
  Settings : {
    screen : Settings,
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Settings",
        headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
  })

const HomeTabNavigator = createBottomTabNavigator({
  FeedStack,
  ProfileStack,
  SettingsStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      header : null,
      headerTitle : routeName
    }
  }
}

)

const HomeStackNavigator = createStackNavigator({
  Home : HomeTabNavigator
},
{
  defaultNavigationOptions:({navigation})=>{
    return {
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home : HomeStackNavigator
});

const SwitchNavigator = createSwitchNavigator({
  Login: Login,
  Home: AppDrawerNavigator,
});

const AppNavigator = createAppContainer(SwitchNavigator);


export default class App extends React.Component {
  render() {
    return (
     <AppNavigator />
    )
  }
}


