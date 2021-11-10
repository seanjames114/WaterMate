import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 

export default function App() {
  return (
    //This is the center of screen portion 
    <SafeAreaView style={styles.container}> 
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible to grow and take it up horizontaller
  },
  header:{
    flex:1,
    alignItems: 'center',
    fontSize: '50',
    fontweight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ImageB:{
    flex: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 66,
    height: 58,
  },
  tinyLogo:{
    width:50,
    height:50,
    alignItems: 'center',
  }
});
