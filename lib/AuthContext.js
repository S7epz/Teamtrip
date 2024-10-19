'use client'

import { createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false); 


  // Recupero dallo storage il valore della variabile e lo riassegno 
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuth");
        setIsAuth(JSON.parse(storedAuth)); 
  }, []);


  // Salvo il valore dell'auth nello storage quando cambia
  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth));
  }, [isAuth]);


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
