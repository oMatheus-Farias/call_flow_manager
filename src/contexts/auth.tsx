import { ReactNode ,useState, createContext, useEffect } from "react";

type AuthContextData = {
  signed: boolean,
  loadingAuth: boolean,
  signIn: (email: string, password: string) => void
};

interface UserProps {
  uid: string,
  name: string | null,
  email: string | null,
  password: string | null
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode } ){
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  function signIn(email: string, password: string){
    console.log('Email: ' + email)
    console.log('Senha: ' + password)
  };

  return(
    <AuthContext.Provider value={{ signed: !!user, loadingAuth, signIn }} >
      { children }
    </AuthContext.Provider>
  );
};