import React, {Component}  from 'react';
import {Text,Alert, View, SafeAreaView,ScrollView, Image, CameraRoll,PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator,
   DrawerItems
} from 'react-navigation'
import Form from './Form';
//import * as firebase from 'firebase';

import SplashScreen from 'react-native-splash-screen'
import Login from './Login'
import AddButton from './AddButton'



class Detail extends Component {
  render() {
    return (
      <View>
        <Text> Detail </Text>
      </View>
    )
  }
}

class Chat extends Component {
  render() {
    return (
      <View>
        <Text> Chat </Text>
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
Form : {
  screen : Form,
  navigationOptions:({navigation})=>{
    return {
      headerTitle:"Account Opening",
      headerLeft : <Icon style={{paddingLeft: 10 }} name="bars" size ={30} 
      onPress={()=>navigation.openDrawer()}/>,
      headerRight:<View style={{flexDirection:"row"}}>
        <Icon style={{paddingRight: 10 }} name="refresh" size ={30} 
      onPress={()=>Alert.alert('Todo','refresh items')}/>
      <Icon style={{paddingRight: 10,paddingLeft: 10 }} name="plus-circle" size ={30} 
      onPress={()=>Alert.alert('Todo','refresh items')}/>
      </View> 
      //plus-circle
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
        headerLeft : <Icon style={{paddingLeft: 10 }} name="bars" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
  })

const SettingsStack= createStackNavigator({
  Settings : {
    screen : Settings,
    tabBarOptions: { 
      showIcon: true 
    },
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bars" size={30} color="##0336FF" />
        ),
        headerLeft : <Icon style={{paddingLeft: 10 }} name="bars" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }
    }
  }
  })

const HomeTabNavigator = createBottomTabNavigator({
  Form : {
    screen:FeedStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="wpforms"
              color={tintColor}
              size={24}
          />
      )
  })
  },
  Chat : {
    screen:Chat,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="wechat"
              color={tintColor}
              size={24}
          />
      )
  })
  },
    // Our plus button
  // Adding: {
  //   screen: () => null, // Empty screen
  //   navigationOptions: ({navigation}) => ({
  //       tabBarIcon: <AddButton navigation={navigation} /> // Plus button component
  //   })
  // },
  Profile: {
    screen:ProfileStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="user-circle-o"
              color={tintColor}
              size={24}
          />
      )
  })
  },
  Settings: {
    screen:SettingsStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="wrench"
              color={tintColor}
              size={24}
          />
      )
  })
  }
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      header : null,
      headerTitle : routeName
    }
  },
    swipeEnabled:true,
    tabBarOptions: {
      activeTintColor: "#0336FF",
      inactiveTintColor: "#858585",
      animationEnabled: true,
      //swipeEnabled: true,
      showLabel:false      
    }
},


)

const HomeStackNavigator = createStackNavigator({
  Home : {
    screen:HomeTabNavigator,
    navigationOptions: () => ({
      drawerIcon: ({tintColor}) => (
          <Icon
              name="user-circle"
              color={tintColor}
              size={24}
          />
      )
  })
  }
},
// {
//   defaultNavigationOptions:({navigation})=>{
//     return {
//       headerLeft: <Icon style={{paddingLeft: 10 }} name="bars" size ={30} 
//       onPress={()=>navigation.openDrawer()}/>
//     }
//   }
// }
)

const CustomDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:120,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
    <Icon name="user-circle" color={"#858585"} size={100} />
    <Text>Hi user!</Text>
  </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home :{
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Main App',
      drawerIcon: ({tintColor}) => 
           <Icon
                name="home"
                color={tintColor}
                size={24}
            />,
    }
  }, 
  },{
  contentComponent:CustomDrawerComponent,
  contentOptions:{
    activeTintColor:'orange'
  }
});

const SwitchNavigator = createSwitchNavigator({
  Login: Login,
  Home: AppDrawerNavigator,
});

const AppNavigator = createAppContainer(SwitchNavigator);


export default class App extends React.Component {


  componentDidMount(){
    SplashScreen.hide();

    // let config = {
    //   apiKey: "AIzaSyDbDRGvXwGITa_eL1I_vDhD2s-lnjm7J1A",
    //   authDomain: "android-70fae.firebaseapp.com",
    //   databaseURL: "https://android-70fae.firebaseio.com",
    //   projectId: "android-70fae",
    //   storageBucket: "android-70fae.appspot.com",
    //   messagingSenderId: "981642465138"
    // };
    // firebase.initializeApp(config);
    // console.log(firebase.name); 
    // firebase.auth().signInWithPopup()

    // auth.signInWithPopup().then((result) => {
    //   // this.setState({
    //   //     user: result.user
    //   // })
    //   alert.alert('Title',JSON.stringify(result.user));
    // })

  } 

  render() {
    return (
     <AppNavigator style={{paddingTop:10}}/>
    )
  }
}


