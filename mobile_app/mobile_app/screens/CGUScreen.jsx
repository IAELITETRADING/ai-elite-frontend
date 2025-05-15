import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const CGUScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conditions Générales d’Utilisation (CGU)</Text>

      <Text style={styles.text}>
        En accédant à l’application AI Elite Trading, vous acceptez les présentes Conditions Générales
        d’Utilisation. Les services proposés incluent des signaux d’investissement, des stratégies IA, et un
        système de trading automatique. L’utilisateur est responsable de ses décisions et de la protection
        de ses identifiants.
      </Text>

      <Text style={styles.text}>
        L’accès à certaines fonctionnalités nécessite un abonnement. AI Elite Trading décline toute
        responsabilité en cas de perte financière liée à l’utilisation des signaux ou outils proposés.
      </Text>

      <Text style={styles.text}>Dernière mise à jour : 15 mai 2025</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 15, marginBottom: 15 },
});

export default CGUScreen;
