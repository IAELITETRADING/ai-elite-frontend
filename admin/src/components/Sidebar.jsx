import React from 'react';
import { NavLink } from 'react-router-dom';
import adminRoutes from '../routes';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>AI Elite Admin</h2>
      <nav>
        {adminRoutes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
