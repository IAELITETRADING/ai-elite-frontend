import React, { useEffect, useState } from 'react';

function Factures() {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/factures`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => setFactures(data))
      .catch(() => setFactures([]));
  }, []);

  return (
    <section className="admin-factures">
      <h2>Factures générées</h2>
      {factures.length === 0 ? (
        <p>Aucune facture trouvée.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Montant</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {factures.map((facture) => (
              <tr key={facture._id}>
                <td>{new Date(facture.date).toLocaleDateString()}</td>
                <td>{facture.utilisateurEmail}</td>
                <td>{facture.montant} €</td>
                <td>
                  <a
                    href={facture.lienPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Factures;
