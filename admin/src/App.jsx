import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import AdminDashboard from './pages/AdminDashboard';
import Utilisateurs from './pages/Utilisateurs';
import SignauxIA from './pages/SignauxIA';
import LogsSystem from './pages/LogsSystem';
import Factures from './pages/Factures';
import Configuration from './pages/Configuration';
import ConnexionAdmin from './pages/ConnexionAdmin';

function App() {
  const isLoggedIn = localStorage.getItem('adminToken');

  if (!isLoggedIn) return <ConnexionAdmin />;

  return (
    <Router>
      <Topbar />
      <div className="admin-container">
        <Sidebar />
        <main className="admin-content">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/signaux" element={<SignauxIA />} />
            <Route path="/logs" element={<LogsSystem />} />
            <Route path="/factures" element={<Factures />} />
            <Route path="/configuration" element={<Configuration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
