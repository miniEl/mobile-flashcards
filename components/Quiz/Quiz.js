import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../GlobalStyles';
import Question from './Question';


class Quiz extends Component {
  state = {
    queIndex: 0,
    rightAns: 0
  }
  render() {
    const { queIndex, rightAns } = this.state;
    const { decks, navigation } = this.props;
    const cards = decks[navigation.getParam('deckID')].cards;
    return (
      <View style={styles.container}>
        <Question id={cards[queIndex]} />
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