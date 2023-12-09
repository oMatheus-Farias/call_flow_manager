import toast from "react-hot-toast";
import { db } from "../../service/firebaseConnection";
import { deleteDoc, doc } from "firebase/firestore";

export default function Modal({detail, closed}: any){
  async function deleteCall(){
    const docRef = doc(db, "called", detail.id);

    await deleteDoc(docRef)
    .then(() => {
      toast.success('Chamado deletado com sucesso');
      closed();
    })
    .catch((error) => {
      console.log('Erro ao tentar deletar chamado', error);
    });
  };

  return(
    <div className="absolute top-0 left-0 bg-bgModal w-full h-full flex flex-col justify-center items-center" >
      <div className="w-[90%] max-w-[50em] p-4 rounded-xl bg-offWhite" >
        <button onClick={ closed } className="bg-primary px-3 py-2 rounded-xl text-offWhite font-bold" >
          Voltar
        </button>

        <h1 className="text-xl mt-3 text-primary font-bold" >Detalhes do chamado</h1>
        <div className="mt-3 flex flex-col gap-2" >
          <p className="font-semibold text-primary" >Cliente: <span className="font-normal" >{ detail.customer }</span></p>
          <p className="font-semibold text-primary" >Assunto: <span className="font-normal" >{ detail.subject }</span></p>
          <p className="font-semibold text-primary" >Cadastrado em: <span className="font-normal" >{ detail.creadtFormat }</span></p>
          <p 
            className="font-semibold text-primary" >Status: <span className="py-1 px-4 rounded-xl text-white font-bold" style={{ backgroundColor: detail.status === 'Aberto' ? '#C61B1B' : detail.status === 'Atendido' ? '#1FC61B' : '#4B4B4B' }} >{ detail.status }</span>
          </p>
          <p className="font-semibold text-primary" >Complemento: <span className="font-normal max-w-[37.5em]" >{ detail.complement }</span></p>
        </div>

        <button onClick={ deleteCall } className="bg-primary px-3 py-2 rounded-xl text-offWhite font-bold flex items-center gap-2 mt-4" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="14" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
          Deletar
        </button>
      </div>
    </div>
  );
};