import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './DeckListStyles';


class DeckList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>Decks List</Text>
          <Text style={styles.text}>0 Cards</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ decks }) => {
  console.log(decks);
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);