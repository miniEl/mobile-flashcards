import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class Question extends Component {
  state = {
    showAnswer: false
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = (cards) => {
  console.log('QUESTION::');
  console.log(cards);
  return {
    cards
  }
}

export default connect(mapStateToProps)(Question);