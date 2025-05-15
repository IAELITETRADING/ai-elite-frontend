import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopNav = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>AI Elite Trading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#0a1f44',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopNav;
