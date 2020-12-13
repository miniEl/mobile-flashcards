import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles';

class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Deck Name</Text>
            <Text style={styles.subtitle}>3 Cards</Text>
          </View>
          <TouchableOpacity style={styles.lightButton}>
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

export default Deck;