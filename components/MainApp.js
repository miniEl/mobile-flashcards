import React, { Component } from 'react';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import { paleYellow } from '../utils/colors';
import { handleInitialData, receiveDecks } from '../actions';
import { setLocalNotification } from '../utils/api';
import MainNavigator from './AppNavigation/MainNavigatin';
import { getData } from '../utils/api';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class MainApp extends Component {
  componentDidMount = () => {
    console.log('functions');
    // console.log(handleInitialData());
    // this.props.dispatch(handleInitialData()).then((value) => {
    //   console.log('PROPS::');
    //   console.log(value);
    // });
    getData().then(({ decks, cards }) => {
      this.props.receiveDecks(decks);

      // dispatch(receiveDecks(decks));
      // dispatch(getCards(cards));
    });

    setLocalNotification();
  }

  render() {
    console.log('VVVVVVVV::');
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={paleYellow} barStyle="dark-content" />
        <MainNavigator />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  console.log('RRRRRRRRRRRRR');
  console.log(decks);
  return {
    decks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    receiveDecks: (decks) => dispatch(receiveDecks(decks)),
  };

};
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);