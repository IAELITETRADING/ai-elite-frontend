import React, { useEffect, useState } from 'react';

function LogsSystem() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/logs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => setLogs(data.reverse()))
      .catch(() => setLogs([]));
  }, []);

  return (
    <section className="admin-logs">
      <h2>Logs système</h2>
      {logs.length === 0 ? (
        <p>Aucun log disponible.</p>
      ) : (
        <ul className="logs-list">
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.timestamp}</strong> — {log.message}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default LogsSystem;
