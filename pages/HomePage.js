import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,FlatList, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 
import { TouchableOpacity } from 'react-native-web';
import HomePageNavButton from './HomePageNavButton'

function HomeScreen() {
  const waterImage = {uri: 'https://wallpapercave.com/wp/wp3149462.png'}
  const [waterIntake, setWaterIntake] = React.useState(0)
  const [waterRemaining, setWaterRemaining] = React.useState(0)

  calcRemWater = ()=>
  {
    setWaterRemaining = waterRemaining - waterIntake;
  }

  const [navbuttons, setnavButtons] = React.useState([
    {text: 'Profile', 
      def: 'Check your quick stats!',
      key: '1'},
    {text: 'Calendar', 
      def: 'Easily find info on past days', 
      key: '2'},
    {text: 'Hydration Plan', 
      def: 'Figure out if you are on track', 
      key: '3'},
    {text: 'Chat', 
      def: 'Questions? Message your primary care proffessional', 
      key: '4'}
  ]);
  return(
    <SafeAreaView style={styles.container}> 
      <ImageBackground source={waterImage} resizeMode="cover" style={styles.ImageB}>
        {/*BELOW IS THE HEADER VIEW */}
        <View style={styles.header}>
          <Text style={styles.title}>WATERMATE</Text>
        </View>
        {/*These are the quick stats*/}
        <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1}}>
          <View style={styles.item}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Current Water Consumption: {waterIntake} oz</Text> 
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Remaing Amount: {waterRemaining} oz</Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Current Streak: 3 Days</Text> 
          </View>
        </View>
        {/*BELOW IS THE CONTENT LIST MENU */}
        <View style={{paddingTop: 10, justifyContent: 'center', alignItems: 'flext-start', flexDirection: 'row', flex: 4}}>
          <FlatList
            data = {navbuttons}
            renderItem={({item}) => ( 
              <HomePageNavButton item={item} />
            )}
          />
          
        </View>
        <View>
          <Button title='test' onPress={this.calcRemWater} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible to grow and take it up horizontaller
  },
  item: {
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginHorizontal: 25,
    height: 150,
    width: 365,
    backgroundColor: 'rgba(255,255,255,.7)',

  },
  header:{
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: '700',
    fontSize: 45,
    textAlign: 'center',
    color: 'rgb(128,128,128)'
  },
  ImageB:{
    flex: 1,
    justifyContent: 'center'
  }
});

export default HomeScreen
