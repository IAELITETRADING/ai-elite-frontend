import React from 'react';
import './Docs.css';

const FAQ = () => {
  return (
    <div className="doc-page">
      <h1>Foire Aux Questions (FAQ)</h1>

      <h2>1. Qu’est-ce qu’AI Elite Trading ?</h2>
      <p>AI Elite Trading est une plateforme qui utilise l’intelligence artificielle pour générer des signaux de trading, proposer des stratégies personnalisées, et exécuter automatiquement vos ordres en fonction de votre profil investisseur.</p>

      <h2>2. Est-ce que c’est adapté aux débutants ?</h2>
      <p>Oui. L’interface est conçue pour être intuitive. Un mode automatique permet aux utilisateurs novices de déléguer les décisions à l’IA tout en suivant leurs performances.</p>

      <h2>3. Quels marchés sont couverts ?</h2>
      <p>Nous couvrons les marchés suivants :</p>
      <ul>
        <li>Actions (US, Europe, Asie)</li>
        <li>Cryptomonnaies</li>
        <li>Forex</li>
        <li>Matières premières</li>
        <li>Options</li>
        <li>Futures et dérivés</li>
      </ul>

      <h2>4. Comment sont générés les signaux ?</h2>
      <p>Les signaux sont générés par notre moteur IA à partir de multiples sources : données de marché, comportement des insiders, hedge funds, politique, actualités, analyse technique, et plus.</p>

      <h2>5. Puis-je trader automatiquement ?</h2>
      <p>Oui. Une fois votre profil complété, vous pouvez activer le trading automatique depuis votre espace. L’IA prendra position pour vous selon vos préférences de risque et de marché.</p>

      <h2>6. Puis-je modifier mes préférences ?</h2>
      <p>Oui, à tout moment depuis votre profil. Les stratégies et signaux s’adapteront automatiquement en fonction de vos nouveaux paramètres.</p>

      <h2>7. Qu’est-ce qu’un score de signal ?</h2>
      <p>C’est un pourcentage calculé par l’IA pour estimer la probabilité de succès d’un signal. Il est basé sur la fiabilité historique, la corrélation actuelle et la nature du déclencheur.</p>

      <h2>8. Que faire si je ne comprends pas un signal ?</h2>
      <p>Chaque signal est expliqué dans sa fiche. Un bouton “Détail” permet d’accéder à la justification (ex : activité d’un hedge fund, cassure technique, etc.).</p>

      <h2>9. Est-ce que je peux tester la plateforme gratuitement ?</h2>
      <p>Oui. Un essai gratuit de 7 jours est proposé avec accès limité. À l’issue, vous pouvez souscrire à un abonnement ou acheter des signaux à l’unité.</p>

      <h2>10. Qui peut voir mes données ?</h2>
      <p>Personne sauf vous. Vos signaux, performances et paramètres sont privés. Nous ne revendons ni ne partageons vos données avec des tiers.</p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default FAQ;
