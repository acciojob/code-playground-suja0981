import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Code Playground</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="auth-status">
        <p>
          Status: {isAuthenticated ? "You are logged in" : "You are not logged in"}
        </p>
        {isAuthenticated && (
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
