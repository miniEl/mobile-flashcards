import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './GlobalStyles';

class Deck extends Component {

  handleAddCard = (deckID) => {
    const { navigation } = this.props;
    navigation.navigate('NewCard', { deckID });
  }

  handleViewQuiz = (deckID) => {
    const { navigation } = this.props;
    navigation.navigate('Quiz', { deckID });
  }

  render() {
    const { decks, navigation } = this.props;
    const deck = decks[navigation.getParam('id')];
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.subtitle}>{deck.cards.length} Cards</Text>
          </View>
          <TouchableOpacity
            style={styles.lightButton}
            onPress={() => this.handleAddCard(deck.id)}
          >
            <Text style={styles.lightButtonText}>Add Card</Text>
          </TouchableOpacity>
          {
            deck.cards.length > 0
              ? <TouchableOpacity
                style={styles.darkButton}
                onPress={() => this.handleViewQuiz(deck.id)}
              >
                <Text style={styles.darkButtonText}>Start Quiz</Text>
              </TouchableOpacity>
              : null
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = (decks) => {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Deck);