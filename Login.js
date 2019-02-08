/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';

export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <Image source={require('./image/logo.png')} style={{width: 50,height: 50}}/>
        <Text style={styles.welcome}>Welcome to My App!</Text>       
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
         <Button
          title="SignIn"
          onPress={() => this.props.navigation.navigate('Home') }
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
    backgroundColor: '#F5FCFF'
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
