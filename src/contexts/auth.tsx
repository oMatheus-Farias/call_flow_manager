import { ReactNode ,useState, createContext, useEffect } from "react";
import { db, auth } from "../service/firebaseConnection";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type AuthContextData = {
  signed: boolean,
  loadingAuth: boolean,
  user: UserProps | null,
  signIn: (email: string, password: string) => void,
  signUp: ({ name, email, password }: UserPropsSignUp) => void
};

interface UserPropsSignUp {
  name: string | null,
  email: string,
  password: string
};

interface UserProps {
  uid: string | null,
  name: string | null,
  email: string | null,
  avatarUrl: any | null
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode } ){
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigate = useNavigate();

  async function signIn(email: string, password: string){
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      let data = {
        uid: uid,
        name: docSnap.data()?.name,
        email: docSnap.data()?.email,
        avatarUrl: docSnap.data()?.avatarUrl
      };

      setUser(data);
      storageUser(data);

      setLoadingAuth(false);
      navigate('/dashboard', { replace: true });
      toast.success('Bem vindo(a)');
    })
    .catch((error) => {
      setLoadingAuth(false);
      console.log('Erro ao realizar login', error);
      toast.error('Algo deu errado!');
    });
  };

  async function signUp({ name, email, password }: UserPropsSignUp){
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      const docRef = doc(db, "users", uid);

      await setDoc(docRef, {
        name: name,
        avatarUrl: null
      })
      .then(() => {
        let data = {
          uid: uid,
          name: name,
          email: value.user.email,
          avatarUrl: null
        };

        setUser(data);
        storageUser(data);

        toast.success('Cadastrado com sucesso!');
        setLoadingAuth(false);
        navigate('/dashboard', { replace: true });
      });
    })
    .catch((error) =>{
      console.log('Erro ao criar usuario', error);
      setLoadingAuth(false);
    });
  };

  function storageUser(data: UserProps){
    localStorage.setItem("@userData", JSON.stringify(data));
  };

  return(
    <AuthContext.Provider value={{ signed: !!user, loadingAuth, user, signIn, signUp }} >
      { children }
    </AuthContext.Provider>
  );
};