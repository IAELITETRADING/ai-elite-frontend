import React from 'react';
import './Docs.css';

const ExplicationScores = () => {
  return (
    <div className="doc-page">
      <h1>Explication des scores et des signaux IA</h1>

      <p>Les signaux générés par l’IA d’AI Elite Trading sont notés selon un système de scoring conçu pour refléter leur fiabilité, leur timing et leur pertinence. Voici comment ces scores sont calculés.</p>

      <h2>1. Structure d’un signal IA</h2>
      <p>Chaque signal contient :</p>
      <ul>
        <li><strong>Actif concerné</strong> (ex : AAPL, BTC/USD)</li>
        <li><strong>Type de signal</strong> : Achat ou Vente</li>
        <li><strong>Déclencheur principal</strong> : événement ayant généré l’alerte</li>
        <li><strong>Score de confiance</strong> (de 0 à 100%)</li>
        <li><strong>Horizon recommandé</strong> : court, moyen ou long terme</li>
      </ul>

      <h2>2. Score de confiance (%)</h2>
      <p>Le score de confiance est une moyenne pondérée de plusieurs indicateurs :</p>
      <ul>
        <li>Fiabilité historique du même déclencheur (+30%)</li>
        <li>Volume de confirmation (volatilité, achats synchrones) (+20%)</li>
        <li>Corrélation avec les données du marché actuel (+20%)</li>
        <li>Analyse sectorielle (ou macro) en cours (+15%)</li>
        <li>Répétition du même schéma dans le passé (pattern matching) (+15%)</li>
      </ul>

      <h2>3. Types de déclencheurs analysés</h2>
      <p>L’IA classe chaque signal selon son déclencheur principal :</p>
      <ul>
        <li><strong>Insiders :</strong> achats/ventes des dirigeants d’entreprises</li>
        <li><strong>Hedge funds :</strong> mouvements détectés dans leurs positions déclarées</li>
        <li><strong>Volatilité :</strong> explosion anormale du volume ou des prix</li>
        <li><strong>Décision politique :</strong> annonces gouvernementales, banques centrales</li>
        <li><strong>Indicateurs techniques :</strong> cassure de résistance, MACD, RSI extrême</li>
        <li><strong>Calendrier économique :</strong> résultats trimestriels, publications macro</li>
        <li><strong>Rumeurs / sentiment social :</strong> via flux X (Twitter), Reddit, Google Trends</li>
      </ul>

      <h2>4. Qualité du signal</h2>
      <p>Chaque signal est classé dans l’une des catégories suivantes :</p>
      <ul>
        <li><strong>Fort :</strong> score > 80% → potentiel élevé</li>
        <li><strong>Modéré :</strong> score entre 60% et 80%</li>
        <li><strong>Faible :</strong> score < 60%</li>
      </ul>

      <h2>5. Dates de déclenchement et durée estimée</h2>
      <p>Chaque signal IA propose une date d’entrée optimale et une estimation de durée (ex : 3 à 5 jours, ou 2 semaines). Cette durée est adaptée automatiquement selon le profil utilisateur (scalping, swing, long terme…)</p>

      <h2>6. Signal composite</h2>
      <p>Certains signaux peuvent être générés par la conjonction de plusieurs déclencheurs. Dans ce cas, le score est renforcé par un coefficient multiplicateur basé sur la cohérence entre les sources.</p>

      <h2>7. Mise à jour et retrait</h2>
      <p>Les signaux sont mis à jour en continu. Lorsqu’un signal devient obsolète (expiration, invalidation IA), il est automatiquement archivé et retiré du flux en cours.</p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default ExplicationScores;
