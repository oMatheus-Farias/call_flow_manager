import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/Input";

const schema = z.object({
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').nonempty('O campo senha é obrigatório')
});

type FormData = z.infer<typeof schema>;

export default function Login(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  function onSubmit(data: FormData){
    console.log(data);
  };

  return(
    <div className=" w-full h-screen bg-gradient-to-t from-secondary to-primary items-center justify-center flex px-8" >
      <div className=" bg-offWhite w-full max-w-3xl px-4 py-12 flex items-center rounded-3xl flex-col" >
        <h1 className="text-4xl font-bold text-primary mb-24 sm:text-6xl" >
          Faça login
        </h1>

        <form 
          onSubmit={ handleSubmit(onSubmit) }
          className="w-full flex flex-col items-center justify-center" 
        >
          <Input
            type="email"
            placeholder="Email"
            name="email"
            error={ errors.email?.message }
            register={ register }
          />

          <Input
            type="password"
            placeholder="Senha"
            name="password"
            error={ errors.password?.message }
            register={ register }
          />

          <button 
            type="submit"
            className="w-full rounded-xl h-12 max-w-lg flex justify-center items-center bg-primary text-white font-bold cursor-pointer mb-8 text-xl" >
              Login
          </button>
        </form>
          <Link to='/register' >Não possui uma conta? Cadastre-se</Link>
      </div>
    </div>
  );
};