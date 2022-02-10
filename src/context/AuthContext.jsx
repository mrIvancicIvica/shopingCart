import { useState, useEffect, createContext } from "react";
import { auth } from "../firebase/firebase-config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return subscribe;
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
