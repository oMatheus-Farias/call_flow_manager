import { Link } from "react-router-dom";

export default function Register(){
  return(
    <div className=" w-full h-screen bg-gradient-to-t from-secondary to-primary items-center justify-center flex px-8" >
      <div className=" bg-offWhite w-full max-w-3xl max-h-[36em] h-full px-4 pt-12 flex items-center rounded-3xl flex-col" >
        <h1 className="text-4xl font-bold text-primary mb-20 sm:text-6xl" >
          Cadastre-se
        </h1>

        <form className="w-full flex flex-col items-center justify-center" >
          <input
            className="w-full rounded-xl h-12 max-w-lg px-6 items-center bg-placeholder text-white border-0 outline-none mb-8"
            type="text"
            placeholder="Nome"
          />

          <input
            className="w-full rounded-xl h-12 max-w-lg px-6 items-center bg-placeholder text-white border-0 outline-none mb-8"
            type="email"
            placeholder="Email"
          />

          <input
            className="w-full rounded-xl h-12 max-w-lg px-6 items-center bg-placeholder text-white border-0 outline-none mb-8"
            type="password"
            placeholder="Senha"
          />

          <button 
            type="submit"
            className="w-full rounded-xl h-12 max-w-lg flex justify-center items-center bg-primary text-white font-bold cursor-pointer mb-8 text-xl" >
              Cadastrar
          </button>

          <Link to='/' >Já possui uma conta? Faça login</Link>
        </form>
      </div>
    </div>
  );
};