import React from 'react';
import './Docs.css';

const Remboursement = () => {
  return (
    <div className="doc-page">
      <h1>Politique de remboursement et d’abonnement</h1>

      <p>Chez AI Elite Trading, nous nous engageons à offrir une expérience utilisateur transparente, simple et flexible. Voici notre politique d’essai gratuit, d’abonnement, de paiement et de remboursement.</p>

      <h2>1. Essai gratuit</h2>
      <p>
        Chaque utilisateur peut bénéficier d’un essai gratuit de 7 jours avec accès limité aux signaux et fonctionnalités.
        Aucune carte bancaire n’est requise pour activer cet essai.
      </p>

      <h2>2. Tarification</h2>
      <p>Nous proposons plusieurs formules :</p>
      <ul>
        <li><strong>Mensuel :</strong> 34,99 € / mois</li>
        <li><strong>6 mois :</strong> 24,99 € / mois (facturé en une fois)</li>
        <li><strong>Annuel :</strong> 20,74 € / mois (facturé en une fois)</li>
      </ul>
      <p>Des achats à l’unité (signaux, stratégies) sont également disponibles sans abonnement.</p>

      <h2>3. Paiement et renouvellement</h2>
      <p>Les abonnements sont reconduits automatiquement sauf annulation. Vous pouvez annuler à tout moment depuis votre espace utilisateur. L’accès reste actif jusqu’à la fin de la période en cours.</p>

      <h2>4. Remboursement</h2>
      <p>
        Les abonnements ne sont <strong>pas remboursables</strong> une fois la période entamée.
        En cas de problème technique grave ou de non-utilisation avérée, vous pouvez toutefois nous contacter pour une étude au cas par cas.
      </p>

      <h2>5. Résiliation</h2>
      <p>Vous pouvez résilier votre abonnement à tout moment depuis la section “Mon compte”. Aucune pénalité ne s’applique. Les services restent accessibles jusqu’à la fin de l’échéance en cours.</p>

      <h2>6. Paiement sécurisé</h2>
      <p>Tous les paiements sont traités via Stripe, un système de paiement sécurisé conforme à la norme PCI-DSS. Aucune donnée bancaire n’est stockée sur notre plateforme.</p>

      <h2>7. Contact</h2>
      <p>Pour toute demande relative à votre abonnement ou à un remboursement, contactez : <a href="mailto:support@ai-elite.com">support@ai-elite.com</a></p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default Remboursement;
