import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const FAQScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Foire Aux Questions (FAQ)</Text>

      <Text style={styles.question}>1. AI Elite Trading, c’est quoi ?</Text>
      <Text style={styles.answer}>
        C’est une plateforme qui utilise l’intelligence artificielle pour vous proposer des signaux de trading
        et des stratégies adaptées à votre profil.
      </Text>

      <Text style={styles.question}>2. Est-ce adapté aux débutants ?</Text>
      <Text style={styles.answer}>
        Oui ! L’interface mobile et web est conçue pour être simple et intuitive. Vous pouvez même
        activer le trading automatique.
      </Text>

      <Text style={styles.question}>3. Est-ce que les signaux sont fiables ?</Text>
      <Text style={styles.answer}>
        Les signaux sont générés par un moteur IA entraîné sur des données historiques, des événements
        politiques, les positions d’insiders et plus encore. Un score de confiance est affiché pour chaque signal.
      </Text>

      <Text style={styles.question}>4. Puis-je tester gratuitement ?</Text>
      <Text style={styles.answer}>
        Oui, vous avez droit à un essai gratuit de 7 jours avec un accès limité.
      </Text>

      <Text style={styles.footer}>Dernière mise à jour : 15 mai 2025</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  question: { fontWeight: 'bold', marginTop: 15 },
  answer: { marginBottom: 10 },
  footer: { marginTop: 30, fontSize: 12, color: '#777' },
});

export default FAQScreen;
