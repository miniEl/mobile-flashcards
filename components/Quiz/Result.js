import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './QuizStyles';

function Result(props) {
  const { correct, total, reset, redirect } = props;
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <Text style={styles.darkTitle}>Quiz Result</Text>
          <Text style={styles.subTitle}>You answered {correct} out of {total}</Text>
          <View style={styles.actionsWrapper}>
            <TouchableOpacity
              style={styles.lightButton}
              onPress={() => reset()}
            >
              <Text style={styles.lightButtonText}>Try again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.darkButton}
              onPress={() => redirect()}
            >
              <Text style={styles.darkButtonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Result;