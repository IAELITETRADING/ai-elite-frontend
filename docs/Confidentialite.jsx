import React from 'react';
import './Docs.css';

const Confidentialite = () => {
  return (
    <div className="doc-page">
      <h1>Politique de confidentialité</h1>

      <p>Chez AI Elite Trading, nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit les types de données collectées, la manière dont elles sont utilisées, stockées et protégées.</p>

      <h2>1. Responsable du traitement</h2>
      <p>Le responsable du traitement est la société AI Elite Trading SASU, immatriculée en France, dont les coordonnées figurent dans les mentions légales.</p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données strictement nécessaires à la fourniture de nos services :</p>
      <ul>
        <li>Nom, prénom, adresse email</li>
        <li>Mot de passe (chiffré)</li>
        <li>Préférences de marché et d’investissement</li>
        <li>Historique d’utilisation de la plateforme</li>
      </ul>

      <h2>3. Finalités de la collecte</h2>
      <p>Les données sont utilisées pour :</p>
      <ul>
        <li>Créer et gérer votre compte</li>
        <li>Générer des signaux personnalisés via l’IA</li>
        <li>Assurer un support client</li>
        <li>Améliorer nos services et prévenir les fraudes</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>Le traitement est fondé sur l’exécution contractuelle (accès aux signaux et services) et le consentement explicite lors de l’inscription.</p>

      <h2>5. Partage des données</h2>
      <p>Nous ne partageons aucune donnée personnelle avec des tiers, sauf :</p>
      <ul>
        <li>Prestataires techniques (hébergement, emailing)</li>
        <li>Obligations légales (requêtes judiciaires ou fiscales)</li>
      </ul>

      <h2>6. Durée de conservation</h2>
      <p>Vos données sont conservées pendant la durée de votre abonnement + 3 ans, sauf suppression anticipée de votre compte.</p>

      <h2>7. Sécurité</h2>
      <p>Nous mettons en œuvre des mesures techniques et organisationnelles (chiffrement, audit, pare-feu) pour garantir la sécurité de vos données.</p>

      <h2>8. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d’accès</li>
        <li>Droit de rectification</li>
        <li>Droit à l’effacement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d’opposition au traitement</li>
      </ul>
      <p>Pour exercer vos droits, contactez-nous à <a href="mailto:contact@ai-elite.com">contact@ai-elite.com</a>.</p>

      <h2>9. Cookies</h2>
      <p>Des cookies sont utilisés à des fins statistiques, de sécurité et d’amélioration de l’expérience utilisateur. Vous pouvez les gérer via votre navigateur.</p>

      <h2>10. Modifications</h2>
      <p>Cette politique peut être modifiée à tout moment. Vous serez notifié en cas de changements importants.</p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default Confidentialite;
