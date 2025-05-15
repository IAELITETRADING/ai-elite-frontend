import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignalCardMobile({ signal }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{signal.actif}</Text>
      <Text>Type : {signal.type}</Text>
      <Text>Score IA : {signal.scoreIA}</Text>
      <Text>Date : {signal.dateSignal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, margin: 10, backgroundColor: '#f4f4f4', borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold' }
});
