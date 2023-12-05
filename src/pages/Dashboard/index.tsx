import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Nav from "../../components/Nav";

export default function Dashboard(){
  const { handleSignOut } = useContext(AuthContext);

  return(
    <div className="h-screen" >
      <Nav/>
    </div>
  );
};