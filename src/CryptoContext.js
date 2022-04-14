import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  
  const [user, setUser] = useState(null);

  

  return (
    <Crypto.Provider value={{user}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};