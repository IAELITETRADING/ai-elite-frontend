import React from 'react';

function Topbar() {
  const logout = () => {
    localStorage.removeItem('adminToken');
    window.location.reload();
  };

  return (
    <header className="topbar">
      <div className="topbar-title">Interface d’administration</div>
      <button onClick={logout} className="btn-logout">
        Se déconnecter
      </button>
    </header>
  );
}

export default Topbar;
