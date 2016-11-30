import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  compnentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDrK8G252MtY6vc8KNiZ2eTVuwo2auPQgs",
      authDomain: "authapp-a36cc.firebaseapp.com",
      databaseURL: "https://authapp-a36cc.firebaseio.com",
      storageBucket: "authapp-a36cc.appspot.com",
      messagingSenderId: "849667837151"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>This is the app</Text>
      </View>
    )
  }
};


export default App;
