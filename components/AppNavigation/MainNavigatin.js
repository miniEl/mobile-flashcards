import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tabs from './TabsNavigation';
import Deck from '../Deck';
import NewCard from '../NewCard';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  Deck: {
    screen: Deck,
    // navigationOptions: ({ navigation }) => ({
    // headerTitle: ,
    // })
    path: 'deck'
  },
  NewCard: {
    screen: NewCard,
    path: 'new-card'
  }
});

export default createAppContainer(MainNavigator);