import { ReactNode ,useState, createContext, useEffect } from "react";

type AuthContextData = {
  signed: boolean,
  loadingAuth: boolean,
  signIn: (email: string, password: string) => void,
  signUp: ({ name, email, password }: UserProps) => void
};

interface UserProps {
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

  function signUp({ name, email, password }: UserProps){
    console.log(name)
    console.log(email)
    console.log(password)
  };

  return(
    <AuthContext.Provider value={{ signed: !!user, loadingAuth, signIn, signUp }} >
      { children }
    </AuthContext.Provider>
  );
};