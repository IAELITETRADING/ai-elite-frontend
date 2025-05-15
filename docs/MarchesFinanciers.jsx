import React from 'react';
import './Docs.css';

const MarchesFinanciers = () => {
  return (
    <div className="doc-page">
      <h1>Guide des marchés financiers</h1>

      <p>AI Elite Trading vous permet d’accéder à une large variété de marchés mondiaux. Voici une présentation claire et synthétique des principaux types d’actifs et de marchés pris en charge par notre plateforme.</p>

      <h2>1. Marché des actions</h2>
      <p>Le marché boursier regroupe les actions cotées sur des places comme le NYSE, le NASDAQ, Euronext, ou encore la Bourse de Tokyo. Notre IA suit les volumes, les résultats d’entreprises, les décisions de dirigeants, et les signaux techniques pour chaque action.</p>
      <ul>
        <li>Stratégies : swing trading, momentum, suivi d’insiders</li>
        <li>Marchés couverts : US, Europe, Asie, Canada</li>
        <li>Avantages : accessible, lisible, soutenu par données fondamentales</li>
      </ul>

      <h2>2. Cryptomonnaies</h2>
      <p>Un marché 24h/24, 7j/7, très volatil. L’IA analyse les tendances sociales, les volumes, les entrées/sorties de wallets, et les mouvements institutionnels pour identifier les pics de momentum ou les signaux de retournement.</p>
      <ul>
        <li>Stratégies : scalping, swing, breakout</li>
        <li>Marchés couverts : BTC, ETH, altcoins, stablecoins</li>
        <li>Avantages : forte réactivité, diversification, trading 24/7</li>
      </ul>

      <h2>3. Forex (marché des devises)</h2>
      <p>Le marché des devises est influencé par les taux d’intérêt, les décisions des banques centrales, et les événements géopolitiques. Notre IA détecte les paires les plus sensibles à l’actualité économique et anticipe les mouvements techniques.</p>
      <ul>
        <li>Stratégies : tendance macro, news trading, range</li>
        <li>Marchés couverts : EUR/USD, USD/JPY, GBP/USD, etc.</li>
        <li>Avantages : forte liquidité, analyse macro fiable</li>
      </ul>

      <h2>4. Options</h2>
      <p>Les options permettent de spéculer sur la hausse ou la baisse d’un actif, ou de se protéger contre un mouvement brusque. AI Elite détecte les flux inhabituels sur les chaînes d’options pour anticiper les stratégies des acteurs institutionnels.</p>
      <ul>
        <li>Stratégies : income, spread, breakout directionnel</li>
        <li>Marchés : US principalement</li>
        <li>Avantages : effet levier, couverture, signaux puissants</li>
      </ul>

      <h2>5. Matières premières</h2>
      <p>Le marché des commodities (or, pétrole, gaz, blé, etc.) est influencé par l’offre, la demande, les stocks, et les tensions géopolitiques. L’IA croise ces données avec les mouvements des marchés dérivés pour générer ses signaux.</p>
      <ul>
        <li>Stratégies : swing, corrélation macro, arbitrage</li>
        <li>Actifs suivis : or, pétrole, cuivre, blé, gaz naturel</li>
        <li>Avantages : diversification, protection contre l’inflation</li>
      </ul>

      <h2>6. Indices boursiers</h2>
      <p>Les indices comme le S&P 500, le CAC 40 ou le Nasdaq 100 permettent d’investir sur l’ensemble d’un marché. L’IA analyse leur dynamique globale, les mouvements sectoriels et la corrélation avec les données macroéconomiques.</p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default MarchesFinanciers;
