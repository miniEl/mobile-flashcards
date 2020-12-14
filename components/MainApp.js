import React, { Component } from 'react';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import { paleYellow } from '../utils/colors';
import { handleInitialData } from '../actions';
import { setLocalNotification } from '../utils/api';
import MainNavigator from './AppNavigation/MainNavigatin';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class MainApp extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
    setLocalNotification();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={paleYellow} barStyle="dark-content" />
        <MainNavigator />
      </View>
    );
  }
}

export default connect()(MainApp);