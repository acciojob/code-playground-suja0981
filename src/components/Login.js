import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ isAuthenticated, onLogin }) => {
  const history = useHistory();

  const handleLogin = () => {
    onLogin();
    history.push("/");
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <div>
          <p>Please log in to access the Code Playground.</p>
          <button type="button" onClick={handleLogin}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
