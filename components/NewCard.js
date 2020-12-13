import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import styles from './GlobalStyles';

class NewCard extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>Add New Card</Text>
        </View>
        <TextInput style={styles.input} placeholder="Enter your question" />
        <TextInput style={styles.input} placeholder="Enter your answer" />
        <TouchableOpacity style={styles.darkButton}>
          <Text style={styles.darkButtonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default NewCard;