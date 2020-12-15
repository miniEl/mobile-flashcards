import React, { Component } from 'react';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import { paleYellow } from '../utils/colors';
import { handleInitialData } from '../actions';
import { setLocalNotification } from '../utils/api';
import MainNavigator from './AppNavigation/MainNavigatin';
import AppLoading from 'expo-app-loading';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class MainApp extends Component {
  state = {
    isLoaded: false
  }
  componentDidMount = () => {
    this.props.dispatch(handleInitialData())
      .then(() => this.setState(() => ({ isLoaded: true })));
    setLocalNotification();
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <AppLoading />
    }
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={paleYellow} barStyle="dark-content" />
        <MainNavigator />
      </View>
    );
  }
}

const mapStateToProps = (decks) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(MainApp);