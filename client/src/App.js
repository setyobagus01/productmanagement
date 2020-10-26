import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import AuthProvider from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Inventory from "./components/pages/Inventory";
import Sales from "./components/pages/Sales";
import { Container } from "./components/StyledDashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/:path?">
            <Dashboard />
          </Route>
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
