import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 AI Elite Trading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0a1f44',
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    color: '#ccc',
    fontSize: 12,
  },
});

export default Footer;
