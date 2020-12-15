import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { handleSaveCard } from '../actions';
import styles from './GlobalStyles';

class NewCard extends Component {
  state = {
    que: '',
    ans: ''
  }

  handleChangeQue = (text) => {
    this.setState({
      que: text.trim()
    });
  }

  handleChangeAns = (text) => {
    this.setState({
      ans: text.trim()
    });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const deckID = navigation.getParam('deckID');
    const { que, ans } = this.state;
    dispatch(handleSaveCard(deckID, que, ans))
      .then(() => navigation.dispatch(NavigationActions.back()))
  }

  render() {
    const { que, ans } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Add New Card</Text>
          </View>
          <TextInput
            value={que}
            style={styles.input}
            placeholder="Enter your question"
            onChangeText={text => this.handleChangeQue(text)}
          />
          <TextInput
            alue={ans}
            style={styles.input}
            placeholder="Enter your answer"
            onChangeText={text => this.handleChangeAns(text)}
          />
          <TouchableOpacity
            style={styles.darkButton}
            disabled={que === '' || ans === ''}
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.darkButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect()(NewCard);