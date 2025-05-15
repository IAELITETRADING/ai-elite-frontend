import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Logique de déconnexion ici
    console.log('Déconnexion');
    navigation.navigate('Accueil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.info}>Email : utilisateur@example.com</Text>
      <Text style={styles.info}>Abonnement : Premium</Text>

      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
});

export default ProfileScreen;
