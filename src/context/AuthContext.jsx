import { createContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
export const AuthContext = createContext({});

export const AuthContextProvider = ({ children, setDarkMode }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setDarkMode }}>
      {children}
    </AuthContext.Provider>
  );
};
