import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function login(email, password) {
    const data = { email, password };
    return axios
      .post("http://localhost:4000/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err.message));
  }

  function loadUser() {
    const token = localStorage.getItem("token");
    if (!token) return console.log("ilang");
    axios
      .get("http://localhost:4000/api/auth/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCurrentUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }

  const value = {
    login,
    loadUser,
    currentUser,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
