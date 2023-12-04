import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

import Input from "../../components/Input";

const schema = z.object({
  name: z.string().min(2, 'O nome deve ter no mínimo 2 caracteres').nonempty('O campo nome é obrigatório'),
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').nonempty('O campo senha é obrigatório')
});

type FormData = z.infer<typeof schema>;

export default function Register(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  function handleRegister(data: FormData){
    console.log(data);
  };

  return(
    <div className=" w-full h-screen bg-gradient-to-t from-secondary to-primary items-center justify-center flex px-8" >
      <div className=" bg-offWhite w-full max-w-3xl max-h-[36em] h-full px-4 pt-12 flex items-center rounded-3xl flex-col" >
        <h1 className="text-4xl font-bold text-primary mb-20 sm:text-6xl" >
          Cadastre-se
        </h1>

        <form 
          onSubmit={ handleSubmit(handleRegister) }
          className="w-full flex flex-col items-center justify-center" 
        >
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            register={ register }
            error={ errors.name?.message }
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            register={ register }
            error={ errors.email?.message }
          />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            register={ register }
            error={ errors.password?.message }
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