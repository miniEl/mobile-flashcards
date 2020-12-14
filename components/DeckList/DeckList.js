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
    console.log('PROPS::');
    console.log(this.props);
    // const decks = Object.values(this.props.decks);
    // this.setState({
    //   decksList: decks
    // })
  }
  render() {
    const { decksList } = this.state;
    if (decksList.length <= 0) {
      return (
        <View style={styles.container}>
          <Ionicons name="happy" style={styles.icon} />
          <Text style={styles.lightText}>Let's create some decks..</Text>
        </View>
      )
    }
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
  console.log('deckssss');
  console.log(decks);
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
