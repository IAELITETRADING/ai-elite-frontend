import React from 'react';
import './Docs.css';

const MentionsLegales = () => {
  return (
    <div className="doc-page">
      <h1>Mentions légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>AI Elite Trading</strong> est édité par :
        <br />
        <strong>AI Elite Trading SASU</strong>
        <br />
        Siège social : 10 rue des FinTech, 75000 Paris, France
        <br />
        SIRET : 951 000 123 00019
        <br />
        Directeur de la publication : Jeremy Walsh
      </p>

      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par :
        <br />
        <strong>Infomaniak Network SA</strong>
        <br />
        Rue Eugène-Marziano 25, 1227 Genève, Suisse
        <br />
        Site web : <a href="https://www.infomaniak.com" target="_blank" rel="noreferrer">www.infomaniak.com</a>
      </p>

      <h2>3. Contact</h2>
      <p>
        Pour toute question, vous pouvez nous contacter à l’adresse suivante :
        <br />
        <a href="mailto:contact@ai-elite.com">contact@ai-elite.com</a>
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        Le site, son contenu, ses marques, logos, textes, images et algorithmes sont la propriété exclusive d’AI Elite Trading SASU. Toute reproduction ou diffusion, même partielle, est strictement interdite sans autorisation préalable.
      </p>

      <h2>5. Responsabilité</h2>
      <p>
        AI Elite Trading ne saurait être tenu responsable des dommages directs ou indirects liés à l’utilisation du site, à des erreurs dans les signaux ou à une indisponibilité temporaire.
      </p>

      <h2>6. Loi applicable</h2>
      <p>
        Le présent site est soumis à la législation française. En cas de litige, seuls les tribunaux de Paris sont compétents.
      </p>

      <p>Dernière mise à jour : 15 mai 2025</p>
    </div>
  );
};

export default MentionsLegales;
