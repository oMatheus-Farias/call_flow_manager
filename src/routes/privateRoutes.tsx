import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }: { children: ReactNode }){
  const { signed, loading } = useContext(AuthContext);

  if(!signed){
    return <Navigate to='/' />
  };

  if(loading){
    return <div></div>
  };
  
  return children;
};