import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import Home from './pages/HomePage'
import Login from './pages/LoginPage'

const Stack = createNativeStackNavigator();


export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}