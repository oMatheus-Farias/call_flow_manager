import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from "../../components/Container";

import { db } from "../../service/firebaseConnection";
import { getDocs, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { list } from "firebase/storage";

export default function New(){
  const [customer, setCustomer] = useState<any[]>([]);
  const [subject, setSubject] = useState('Suporte');
  const [status, setStatus] = useState('Aberto');
  const [complement, setComplement] = useState('');

  const listCustomersRef = collection(db, "customers");

  useEffect(() => {
    async function getCustomersList(){
      const querySnapshot = await getDocs(listCustomersRef)
      .then((snapshot) => {
        let list: any[] = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            fantasyName: doc.data().fantasyName
          });
        });

        if(snapshot.docs.length === 0){
          console.log('Nenhum cliente encontrado');
          toast.error('Nenhum cliente encontrado/cadastrado');
          setCustomer([{ id: 1, fantasyName: 'FREELA' }]);
          return
        };

        setCustomer(list);
      })
      .catch((error) => {
        console.log('Erro ao buscar lista de clientes', error);
        setCustomer([{ id: 1, fantasyName: 'FREELA' }]);
      })
    };

    getCustomersList();
  }, []);

  function handleChecked(event: any){
    setStatus(event.target.value);
  };

  function handleSubject(event: any){
    setSubject(event.target.value);
  };

  console.log(customer)

  return(
    <div className="h-full bg-offWhite md:flex" >
      <Nav/>

      <Container>
        <Header
          title="Novo Chamado"
          icon = {
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
          }
        />

        <section className="bg-white rounded-xl p-4 mb-2" >
          <form className="flex flex-col max-w-lg w-full" >
            <label className="text-2xl text-primary mb-2" >Cliente</label>
            <select className="bg-placeholder rounded-2xl px-4 py-3 text-base text-white" >
              <option key={1} value={1} >Loja Informática</option>
              <option key={2} value={2} >Mercado Esquina</option>
            </select>

            <label className="text-2xl text-primary mb-2 mt-6" >Assunto</label>
            <select 
              className="bg-placeholder rounded-2xl px-4 py-3 text-base text-white"
              value={ subject }
              onChange={ handleSubject } 
            >
              <option value='Sporte' >Suporte</option>
              <option value='Visita Técnica' >Visita Técnica</option>
              <option value='Financeiro' >Financeiro</option>
            </select>

            <label className="text-2xl text-primary mb-2 mt-6" >Status</label>
            <section className="flex gap-6" >
              <div className="flex gap-1" >
                <input 
                  type="radio"
                  name="radio"
                  value='Aberto'
                  onChange={handleChecked}
                  checked={ status === 'Aberto' } 
                />
                <span>Em aberto</span>
              </div>

              <div className="flex gap-1" >
                <input 
                  type="radio"
                  name="radio"
                  value='Progresso'
                  onChange={handleChecked}
                  checked={ status === 'Progresso' } 
                />
                <span>Progresso</span>
              </div>

              <div className="flex gap-1" >
                <input 
                  type="radio"
                  name="radio"
                  value='Atendido'
                  onChange={handleChecked}
                  checked={ status === 'Atendido' } 
                />
                <span>Atendido</span>  
              </div>
            </section>

            <label className="text-2xl text-primary mb-2 mt-6" >Complemento</label>
            <textarea
              className="bg-placeholder text-white rounded-xl px-4 py-3 text-base resize-none max-h-24"
              placeholder="Descreva o seu problema (opcional)"
              value={ complement }
              onChange={ (event) => setComplement(event.target.value) }
            />

            <button
              type="submit" 
              className="mt-3 bg-primary w-full rounded-2xl px-4 py-3 text-xl text-white font-bold"
            >
              Registrar
            </button>
          </form>
        </section>  
      </Container>
    </div>
  );
};