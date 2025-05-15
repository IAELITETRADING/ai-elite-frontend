import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DocsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documentation</Text>

      <Button title="Conditions Générales d’Utilisation (CGU)" onPress={() => navigation.navigate('CGU')} />
      <Button title="Foire Aux Questions (FAQ)" onPress={() => navigation.navigate('FAQ')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
});
export default DocsScreen;
