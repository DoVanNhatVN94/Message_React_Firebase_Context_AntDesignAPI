/** @format */

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const history = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, SetLoading] = useState(true);

  useEffect(() => {
    const unSubScibed = auth.onAuthStateChanged((user) => {
      console.log(user);
      console.log(history);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        SetLoading(false);
        history("/");
      } else history("/login");
    });
    //clean function
    return () => {
      unSubScibed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
