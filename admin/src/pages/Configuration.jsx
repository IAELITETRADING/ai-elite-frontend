import React, { useEffect, useState } from 'react';

function Configuration() {
  const [config, setConfig] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/config`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(() => setConfig(null));
  }, []);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/admin/config`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify(config),
    })
      .then(res => res.json())
      .then(data => setMessage('Configuration mise à jour.'))
      .catch(() => setMessage('Erreur lors de la mise à jour.'));
  };

  if (!config) return <p>Chargement de la configuration...</p>;

  return (
    <section className="admin-config">
      <h2>Paramètres globaux</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pourcentage de commission (% par trade) :
          <input
            type="number"
            name="commission"
            value={config.commission || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Mode pré-validation des ordres :
          <select name="preValidation" value={config.preValidation} onChange={handleChange}>
            <option value="true">Activée</option>
            <option value="false">Désactivée</option>
          </select>
        </label>
        <button type="submit" className="btn-primary">Enregistrer</button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
}

export default Configuration;
