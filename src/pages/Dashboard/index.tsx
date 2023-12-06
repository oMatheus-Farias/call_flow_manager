import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from "../../components/Container";

export default function Dashboard(){
  return(
    <div className="h-screen bg-offWhite md:flex" >
      <Nav/>

      <Container>
        <Header
          title='Chamados'
          icon={
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
          }
        />

        <h1>Testeeeeeeeee</h1>
      </Container>
    </div>
  );
};