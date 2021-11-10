import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 
import Home from './pages/HomePage'
/*below is the image of the running girl that will be used for out background */        
const runningGirlImage = {uri: "https://static.wixstatic.com/media/51ae2e_30e94e2d151e4dad911f38da3272b0d1~mv2.jpg/v1/fit/w_924,h_520/51ae2e_30e94e2d151e4dad911f38da3272b0d1~mv2.jpg"}


export default function App() {
  const [text, onChangeText] = React.useState(null);
  return (
    //This is the center of screen portion 
    <SafeAreaView style={styles.container}> 
      <ImageBackground source={runningGirlImage} resizeMode="cover" style={styles.ImageB}>
       <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center', 
        }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            WELCOME TO WATERMATE
          </Text>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="I hate life"
          />
          <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Password"
          />
          <Button
            onPress={() => {    alert('You tapped the login button but I know you dont have an account asshole!');  }}
            title="Login"
          />
          <Button
            onPress={() => {    alert('You tapped the login button but I know you dont have an account asshole!');  }}
            title="Create Account"
            color= "transparent"
            
          />
        </View>   
       </ImageBackground>
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
    fontSize: 50,
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
