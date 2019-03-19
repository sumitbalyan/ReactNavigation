
import React, {Component} from 'react';
import {Platform,StatusBar, StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
//import * as firebase from 'firebase';

export default class Login extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      loading : false
    }
    this.getApi=this.getApi.bind(this)
  }

  getData = (filterData) => new Promise((resolve, reject) => {
    setTimeout(resolve("Success"), 500);
  });

  getApi=()=>{
    // alert('jkn')
    // this.setState({loading:true})
    // const result = await getData()
    // this.setState({loading:true})
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0336FF" translucent = {false}/>
       <Image source={require('./image/logo.png')} style={{width: 50,height: 50}}/>
        <Text style={styles.welcome}>Welcome to My App!</Text>       
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
         <Button
          title="SignIn"
          color="#0336FF"
          onPress={ this.getApi }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    fontSize: 16,
    margin: 10,
    padding: 8, 
    borderColor: 'gray', 
    borderWidth: 2,
    borderRadius: 20
  }
});
