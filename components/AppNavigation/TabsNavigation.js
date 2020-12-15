import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DeckLisk from '../DeckList/DeckList';
import NewDeck from '../NewDeck';
import { Ionicons } from '@expo/vector-icons';
import { dark, white } from '../../utils/colors';

const Tabs = createBottomTabNavigator({
  DeckLisk: {
    screen: DeckLisk,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) =>
        <Ionicons name="layers-outline" size={24} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) =>
        <Ionicons name="add-circle-outline" size={30} color={tintColor} />
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: dark,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  });

export default createAppContainer(Tabs);
