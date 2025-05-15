import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur AI Elite Trading</Text>
      <Text style={styles.subtitle}>Application mobile officielle</Text>

      <Button title="Se connecter" onPress={() => navigation.navigate('Connexion')} />
      <Button title="S’inscrire" onPress={() => navigation.navigate('Inscription')} />
      <Button title="Documentation" onPress={() => navigation.navigate('Documentation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f6ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0a1f44',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
});

export default HomeScreen;
