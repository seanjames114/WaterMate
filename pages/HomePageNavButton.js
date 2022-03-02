import React from 'react';
import { StyleSheet,TouchableOpacity, FlatList, Dimensions, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Alert, TouchableHighlight, SafeAreaView, Button,
          Platform,
          PlatformColor,
          TextInput,  } from 'react-native'; //Safe area view will allow content to be in the safe area for each device 

export default function navButton({item}){

    return(
        <TouchableOpacity style={styles.item}>
            <Text style= {styles.textTitle}>{item.text}</Text>
            <Text style= {styles.text}>{item.def}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: 100,
        fontSize: 12,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        paddingVertical: 38,
        marginVertical: 15,
        marginHorizontal: 25
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',   
        paddingVertical: 5,  
    },
    textTitle: {
        fontWeight: '700',
        textAlign: 'center',
        justifyContent: 'center',     
    }
})