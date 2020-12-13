import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import styles from './GlobalStyles';

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Add New Deck</Text>
          </View>
          <TextInput style={styles.input} placeholder="Deck Name" />
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default NewDeck;