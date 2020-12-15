import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';
import { handleInitialData, handleSaveDeck } from '../actions';
import styles from './GlobalStyles';

class NewDeck extends Component {
  state = {
    title: ''
  }

  handleChangeText = (text) => {
    this.setState({
      title: text.trim()
    });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { title } = this.state;
    dispatch(handleSaveDeck(title))
      .then((deck) => {
        navigation.navigate('Deck', { title: deck.title, id: deck.id });
      });
    this.setState(() => ({
      title: ''
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Add New Deck</Text>
          </View>
          <TextInput
            value={title}
            style={styles.input}
            placeholder="Deck Name"
            onChangeText={text => this.handleChangeText(text)}
          />
          <TouchableOpacity
            style={styles.darkButton}
            disabled={title === ''}
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.darkButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect()(NewDeck);