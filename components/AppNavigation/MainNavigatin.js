import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tabs from './TabsNavigation';
import Deck from '../Deck';
import NewCard from '../NewCard';
import { dark, paleYellow, white } from '../../utils/colors';

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: () => ({
            headerShown: false
        })
    },
    Deck: {
        screen: Deck,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerStyle: {
                backgroundColor: paleYellow
            }
        })
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            headerTitle: 'Add New Card',
            headerStyle: {
                backgroundColor: paleYellow
            }
        }
    }
});

export default createAppContainer(MainNavigator);