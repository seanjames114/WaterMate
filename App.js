import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
let x = 1;
  console.log("App has been executed") // This is how you can log to the debugger
  return (
    <View style={styles.container}>
      <Text>This will be the page the app will open on. I just needed to get it up and running.</Text>
      <Text>I hope you like it :)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
