import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DeckListStyles';

class DeckList extends Component {
  state = {
    decksList: []
  }

  componentDidMount = () => {
    const decks = Object.values(this.props.decks);
    this.setState({
      decksList: decks
    });
  }

  handleViewDeck = (deck) => {
    const { navigation } = this.props;
    navigation.navigate('Deck', { title: deck.title, id: deck.id });
  }

  render() {
    const obj = Object.values(this.props.decks);
    let decksArr = [];
    obj.map((item) => {
      if (item.cards) decksArr.push(item);
      return decksArr;
    })

    if (decksArr.length <= 0) {
      return (
        <View style={styles.container}>
          <Ionicons name="happy" style={styles.icon} />
          <Text style={styles.lightText}>Let's create some decks..</Text>
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          decksArr.map((deck) => (
            <TouchableOpacity
              style={styles.card}
              key={deck.id}
              onPress={() => this.handleViewDeck(deck)}
            >
              <Text style={styles.title}>{deck.title}</Text>
              <Text style={styles.text}>{deck.cards.length} Cards</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (decks) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
