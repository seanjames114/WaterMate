import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,FlatList, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 
import HomePageNavButton from './HomePageNavButton'

function HomeScreen() {
  const [navbuttons, setnavButtons] = React.useState([
    {text : 'Profile', key: '1'},
    {text : 'Calendar', key: '2'}
  ]);
  return(
    <SafeAreaView style={styles.container}> 
      {/*BELOW IS THE HEADER VIEW */}
      <View style={styles.header}>
        <Text style={styles.title}>WATERMATE</Text>
      </View>
      {/*BELOW IS THE CONTENT LIST MENU */}
      <view>
        <FlatList
        data = {navbuttons}
        renderItem={({item}) => (
          <HomePageNavButton item ={item} />
        )}
        />
      </view>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible to grow and take it up horizontaller
  },
  list:{

  },
  header:{
    height: 80,
    paddingTop: 40,
    backgroundColor: 'lightblue',
  },
  title:{
    textAlign: 'center',
    fontStyle: 'bold',
    fontSize: 30,
    
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

export default HomeScreen
