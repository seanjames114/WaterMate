import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 
/*below is the image of the running girl that will be used for out background */        
const runningGirlImage = {uri: "https://static.wixstatic.com/media/51ae2e_30e94e2d151e4dad911f38da3272b0d1~mv2.jpg/v1/fit/w_924,h_520/51ae2e_30e94e2d151e4dad911f38da3272b0d1~mv2.jpg"}

function LoginScreen({navigation}) {
  const [textUsername, onChangeUsernameText] = React.useState(null);
  const [textPassword, onChangePasswordText] = React.useState(null);
  const [nametxt, setName] = React.useState('NAME ERROR');
  const UsersName = nametxt
  const clickHandler = () =>{
    navigation.navigate('Home')
    
  }
  return(
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
            onChangeText= {(val) => setName(val)}
            placeholder="Name"
          />
          <TextInput 
            style={styles.input}
            onChangeText={onChangePasswordText}
            value={textPassword}
            placeholder="Password"
          />
          <Button
            onPress={() => navigation.navigate('Home')}
            OnPress={clickHandler}
            title= "Login"
          />
          <Text>NAME : {nametxt}</Text>
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

export default LoginScreen