import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './GlobalStyles';

class Deck extends Component {

  handleAddCard = () => {
    const { navigation } = this.props;
  }

  render() {
    const { decks, navigation } = this.props;
    // const deck = decks[navigation.getParam('id')];
    // console.log('TTTTTT');
    // console.log(navigation.getParam('id'));
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Deck Name</Text>
            <Text style={styles.subtitle}>3 Cards</Text>
          </View>
          <TouchableOpacity
            style={styles.lightButton}
            onPress={() => handleAddCard()}
          >
            <Text style={styles.lightButtonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  console.log('After New Deck');
  console.log(decks);
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck);