import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './QuizStyles';

class Question extends Component {
  state = {
    showAnswer: false
  }

  handleToggle = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  }

  render() {
    const { question, answer, index, total, correct, wrong } = this.props;
    const { showAnswer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.lightTitle}>{index}/{total}</Text>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            {
              !showAnswer ?
                <Text style={styles.text}>{question}</Text>
                : <Text style={styles.text}>{answer}</Text>
            }
            <TouchableOpacity
              style={styles.toggle}
              onPress={() => this.handleToggle()}>
              <Text style={styles.toggleText}>
                {
                  !showAnswer ?
                    'Show Answer'
                    : 'Show Question'
                }
              </Text>
            </TouchableOpacity>
            <View style={styles.actionsWrapper}>
              <TouchableOpacity
                style={styles.lightButton}
                onPress={() => { this.handleToggle(); correct(); }}
              >
                <Text style={styles.lightButtonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkButton}
                onPress={() => { this.handleToggle(); wrong(); }}
              >
                <Text style={styles.darkButtonText}>Wrong</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (cards, props) => {
  const { question, answer } = cards[props.id]
  return {
    question,
    answer
  }
}

export default connect(mapStateToProps)(Question);