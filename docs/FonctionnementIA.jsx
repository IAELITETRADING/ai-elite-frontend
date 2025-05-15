import React from 'react';
import './Docs.css';

const FonctionnementIA = () => {
  return (
    <div className="doc-page">
      <h1>Fonctionnement de l’intelligence artificielle dans AI Elite Trading</h1>

      <p>AI Elite Trading repose sur une intelligence artificielle conçue pour identifier des opportunités de trading à forte probabilité, en analysant des millions de données en temps réel.</p>

      <h2>1. Données analysées</h2>
      <p>Notre IA collecte et recoupe :</p>
      <ul>
        <li>Les mouvements de marché en temps réel (cours, volumes, volatilité)</li>
        <li>Les achats/ventes d’insiders (dirigeants, grands actionnaires)</li>
        <li>Les décisions et portefeuilles de hedge funds</li>
        <li>Les annonces politiques et économiques</li>
        <li>Les événements sectoriels, fusions, publications de résultats</li>
      </ul>

      <h2>2. Moteurs de décision IA</h2>
      <p>Les modèles utilisés sont des hybrides de :</p>
      <ul>
        <li>Réseaux de neurones (LSTM) pour la prédiction des séries temporelles</li>
        <li>Random Forests et Gradient Boosting pour les filtres de déclenchement</li>
        <li>Régression logistique pondérée pour le scoring de signal</li>
        <li>Algorithmes d’apprentissage renforcé pour le backtesting adaptatif</li>
      </ul>

      <h2>3. Génération de signaux</h2>
      <p>Chaque signal est le fruit de plusieurs couches d’analyse combinées. Il contient :</p>
      <ul>
        <li>Le type de signal : achat / vente</li>
        <li>Le niveau de confiance (de 0 à 100%)</li>
        <li>La durée estimée du mouvement (court/moyen/long terme)</li>
        <li>La raison du déclenchement (insider, fonds, politique, etc.)</li>
      </ul>

      <h2>4. Spécificités par marché</h2>
      <p>L’IA est adaptée à chaque classe d’actifs :</p>
      <ul>
        <li><strong>Actions :</strong> prédiction basée sur fondamentaux + volatilité sectorielle</li>
        <li><strong>Cryptomonnaies :</strong> algorithmes haute fréquence + alertes de liquidité</li>
        <li><strong>Forex :</strong> corrélations géopolitiques + macroéconomie + momentum</li>
        <li><strong>Options :</strong> détection d’activité anormale sur chaînes d’options</li>
        <li><strong>Matières premières :</strong> impact des stocks mondiaux et tensions géopolitiques</li>
      </ul>

      <h2>5. Backtests et amélioration continue</h2>
      <p>Les modèles sont recalibrés chaque semaine via des backtests automatiques sur données réelles, optimisant le rendement ajusté au risque.</p>

      <h2>6. Limites et responsabilité</h2>
      <p>Comme tout modèle probabiliste, l’IA d’AI Elite Trading ne garantit pas un gain. Les signaux sont des outils d’aide à la décision, et l’utilisateur reste seul maître de ses positions.</p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default FonctionnementIA;
