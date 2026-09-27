import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import "./../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="main-container">
        <Navigation
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
        <Switch>
          <Route path="/login">
            <Login
              isAuthenticated={isAuthenticated}
              onLogin={handleLogin}
            />
          </Route>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
