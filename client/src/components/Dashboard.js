import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Container } from "./StyledDashboard";
import Navbar from "./Navbar";
import Sales from "./pages/Sales";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";

function Dashboard() {
  // const { loadUser, currentUser, loading } = useAuth();
  // useEffect(() => {
  //   loadUser();
  // }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/" component={Sales} />
        </Switch>
      </Container>
    </>
  );
}

export default Dashboard;
