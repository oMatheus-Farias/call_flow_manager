import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Nav from "../../components/Nav";
import Container from "../../components/Container";

export default function Dashboard(){
  const { handleSignOut } = useContext(AuthContext);

  return(
    <div className="h-screen md:flex" >
      <Nav/>

      <Container>
        <h1>TESTE</h1>
      </Container>
    </div>
  );
};