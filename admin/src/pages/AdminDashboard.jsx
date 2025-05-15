import React from 'react';

function AdminDashboard() {
  return (
    <section className="admin-dashboard">
      <h2>Tableau de bord</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Utilisateurs actifs</h3>
          <p>Voir le nombre d’utilisateurs inscrits et actifs.</p>
        </div>
        <div className="card">
          <h3>Signaux générés</h3>
          <p>Suivi des signaux IA générés et validés automatiquement.</p>
        </div>
        <div className="card">
          <h3>Revenus mensuels</h3>
          <p>Revenus provenant des abonnements Stripe et in-app purchases.</p>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
