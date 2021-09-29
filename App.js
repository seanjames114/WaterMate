import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 

export default function App() {
  console.log("App has been executed") // This is how you can log to the debugger
  return (
    <SafeAreaView style={styles.container}> 
      <Text>This will be the page the app will open on. I just needed to get it up and running.</Text> 
      <Text>I hope you like it :)</Text>
      <Image source={{
        width : 200,
        height : 300,
        uri: "https://picsum.photos/200/300"}} />
      <Text>There should be an image above me</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible to grow and take it up horizontaller
    backgroundColor: '#fff', //can use name or rgb colors 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
