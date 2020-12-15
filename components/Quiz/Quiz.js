import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/api';
import Question from './Question';
import Result from './Result';
import styles from '../GlobalStyles';
import { NavigationActions } from 'react-navigation';

class Quiz extends Component {
  state = {
    queIndex: 0,
    rightAns: 0
  }

  rightAnswer = () => {
    const { rightAns } = this.state;
    this.setState({ rightAns: rightAns + 1 });
    this.nextQue();
  }

  nextQue = () => {
    const { queIndex } = this.state;
    const { decks, navigation } = this.props;
    const cards = decks[navigation.getParam('deckID')].cards;
    this.setState({ queIndex: queIndex + 1 });
    if (queIndex >= cards.length)
      clearLocalNotification().then(setLocalNotification);
  }

  clearQue = () => {
    this.setState({ queIndex: 0, rightAns: 0 });
  }

  redirectToDeck = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  }

  render() {
    const { queIndex, rightAns } = this.state;
    const { decks, navigation } = this.props;
    const cards = decks[navigation.getParam('deckID')].cards;

    return (
      <View style={styles.container}>
        {
          queIndex < cards.length ?
            <Question
              id={cards[queIndex]}
              index={queIndex + 1}
              total={cards.length}
              correct={this.rightAnswer}
              wrong={this.nextQue}
            />
            :
            <Result
              correct={rightAns}
              total={cards.length}
              reset={this.clearQue}
              redirect={this.redirectToDeck}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = (decks) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);