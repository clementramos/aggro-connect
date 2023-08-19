"use client";
import React from "react";
import { onAuthStateChange, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import Navbar from "@/components/Navbar";
import "@/app/globals.css"

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <>
          <Navbar />
          <div classname="text-center">
            <p classname="text-[10rem]">Chargement auth...</p>
          </div>
        </>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
