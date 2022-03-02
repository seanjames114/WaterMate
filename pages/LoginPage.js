import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
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
          justifyContent: 'flex-end',
          paddingBottom: 45
        }}>
          <Text style={{fontSize: 50, color: 'white',  fontWeight: 'bold'}}>
            W A T E R M A T E
          </Text>
        </View>
        <View style={{
          flex: 1.2,
          alignItems: 'flex-start',
          paddingHorizontal: 5,
        }}>
          <TextInput 
            style={styles.input}
            onChangeText= {(val) => setName(val)}
            placeholderTextColor = 'white'
            placeholder="Name"
          />
          <TextInput 
            style={styles.input}
            onChangeText={onChangePasswordText}
            value={textPassword}
            placeholderTextColor = 'white'
            placeholder="Password"
          />
          <TouchableOpacity
            activeOpacity={.8}
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={{
                color:'white',
                alignItems:'center'
              }}
               >Login</Text>
          </TouchableOpacity>
          
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
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 180,
    marginVertical: 10,
    backgroundColor: 'rgba(0,128,0,.7)',
    padding: 15,
    borderRadius: 15,
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
  },
  button:{
    height: 40,
    width: 100,
    margin: 12,
    marginLeft: 35,
    backgroundColor: 'rgb(0,128,0)',
    padding: 10,
    paddingLeft: 30,
    borderRadius: 15, 
   }
});

export default LoginScreen