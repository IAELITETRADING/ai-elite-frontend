import React, { useEffect, useState } from 'react';

function SignauxIA() {
  const [signaux, setSignaux] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/signaux`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => setSignaux(data))
      .catch(() => setSignaux([]));
  }, []);

  return (
    <section className="admin-signaux">
      <h2>Signaux IA générés</h2>
      {signaux.length === 0 ? (
        <p>Aucun signal enregistré.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Actif</th>
              <th>Type</th>
              <th>Score</th>
              <th>Date prévue d’achat</th>
              <th>Déclencheur</th>
            </tr>
          </thead>
          <tbody>
            {signaux.map(signal => (
              <tr key={signal._id}>
                <td>{signal.actif}</td>
                <td>{signal.type}</td>
                <td>{signal.score}/100</td>
                <td>{new Date(signal.date_achat).toLocaleDateString()}</td>
                <td>{signal.declencheur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default SignauxIA;
