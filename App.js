import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import AudioListItem from './app/components/AudioListItem';
import AudioProvider from './app/context/AudioProvider';
import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
  // return (
  //   <AudioProvider>
  // <NavigationContainer>
  //   <AppNavigator />
  // </NavigationContainer>
  // </AudioProvider>
  // );

  return <View>
    <AudioListItem />
  </View>
}


