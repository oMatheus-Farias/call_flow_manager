import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from "../../components/Container";

import { Link } from "react-router-dom";

// table td .action{
//   border: 0;
//   padding: 6px;
//   border-radius: 4px;
//   display: inline-block;
//   margin-right: 4px;
// }

// table td .action svg{
//   vertical-align: middle;
// }

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

        <Link to='/new' className="float-right bg-greenColor px-4 py-2 rounded-xl text-white flex items-center gap-2 text-lg mb-4" >
          <svg className="text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="14" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
          </svg>
          Novo Chamado
        </Link>

        <table className="w-full rounded-xl bg-white m-0 p-0 table-fixed border-collapse md:border-0" >
          <thead>
            <tr className="border-b-2 border-offWhite" >
              <th scope="col" >Cliente</th>
              <th scope="col" >Assunto</th>
              <th scope="col" >Status</th>
              <th scope="col" >Cadastrado em</th>
              <th scope="col" >#</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2 border-offWhite" >
              <td data-label='Cliente'  >Loja Informática</td>
              <td data-label='Assunto' >Financeiro</td>
              <td data-label='Status' >
                <span className="bg-greyColor py-1 rounded-xl text-white font-bold flex items-center justify-center" >Progresso</span>
              </td>
              <td data-label='Cadastrado em' >11/12/2023</td>
              <td data-label='#' className="flex items-center justify-center gap-2" >
                <button className="bg-placeholder p-3 rounded-xl" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                  </svg>
                </button>

                <Link to='/new' className="bg-placeholder p-3 rounded-xl" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                  </svg>
                </Link>
              </td>
            </tr>

            <tr className="border-b-2 border-offWhite" >
              <td data-label='Cliente'  >Mercado esquina</td>
              <td data-label='Assunto' >Financeiro</td>
              <td data-label='Status' >
                <span className="bg-greyColor py-1 rounded-xl text-white font-bold flex items-center justify-center" >Progresso</span>
              </td>
              <td data-label='Cadastrado em' >11/12/2023</td>
              <td data-label='#' className="flex items-center justify-center gap-2" >
                <button className="bg-placeholder p-3 rounded-xl" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                  </svg>
                </button>

                <Link to='/new' className="bg-placeholder p-3 rounded-xl" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                  </svg>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};