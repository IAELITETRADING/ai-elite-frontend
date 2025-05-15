import React, { useState } from 'react';

function ConnexionAdmin() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');

  const handleConnexion = async (e) => {
    e.preventDefault();
    setErreur('');

    const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: motDePasse }),
    });

    const data = await response.json();
    if (response.ok && data.token) {
      localStorage.setItem('adminToken', data.token);
      window.location.reload();
    } else {
      setErreur(data.message || 'Échec de la connexion');
    }
  };

  return (
    <section className="connexion-admin">
      <h2>Connexion Admin</h2>
      <form onSubmit={handleConnexion}>
        <input
          type="email"
          placeholder="Email administrateur"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />
        {erreur && <p className="erreur">{erreur}</p>}
        <button type="submit" className="btn-primary">Se connecter</button>
      </form>
    </section>
  );
}

export default ConnexionAdmin;
