import { ReactNode ,useState, createContext, useEffect } from "react";

type AuthContextData = {
  signed: boolean,
  loadingAuth: boolean
};

interface UserProps {
  uid: string,
  name: string | null,
  email: string | null
};

const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode } ){
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  return(
    <AuthContext.Provider value={{ signed: !!user, loadingAuth }} >
      { children }
    </AuthContext.Provider>
  );
};