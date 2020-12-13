import React from 'react';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import MainNavigator from './components/AppNavigation/MainNavigatin';
import { paleYellow } from './utils/colors';

function CardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CardsStatusBar backgroundColor={paleYellow} barStyle="dark-content" />
      <MainNavigator />
    </View>
  );
}
