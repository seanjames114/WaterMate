import React from 'react';
import { StyleSheet,TouchableOpacity, FlatList, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 

export default function navButton({item}){

    return(
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'lightblue',
        borderwidth: 1,
        borderstyle: 'dotted',
        borderradius: 10
    }
})