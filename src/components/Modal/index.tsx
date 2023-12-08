export default function Modal({detail, closed}: any){
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
      </div>
    </div>
  );
};