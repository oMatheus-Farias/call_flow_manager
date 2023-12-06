import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fantasyName: z.string().min(2, 'O nome deve ter no mínimo dois caracteres').nonempty('O campo nome é obrigatório'),
  cnpj: z.string().min(14, 'O numero deve ter 14 caracteres numéricos').max(14, 'O numero deve ter 14 caracteres numéricos').nonempty('O campo CNPJ é obrigatório'),
  address: z.string().nonempty('O campo endereço é obrigatório')
});

type FormData = z.infer<typeof schema>;

export default function Customers(){
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  function onSubmit(data: FormData){
    console.log(data);
    reset();
  };

  return(
    <div className="h-screen bg-offWhite md:flex" >
      <Nav/>

      <Container>
        <Header
          title='Clientes'
          icon={
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
          }
        />

        <section className="bg-white rounded-xl p-4 mb-2" >
          <form className="max-w-lg w-full" onSubmit={ handleSubmit(onSubmit) } >
            <label className="text-2xl text-primary" >Nome Fantasia</label>
            <Input
              type="text"
              placeholder="Nome da empresa"
              name="fantasyName"
              register={ register }
              error={ errors.fantasyName?.message }
            />

            <label className="text-2xl text-primary" >CNPJ</label>
            <Input
              type="text"
              placeholder="Digite o CNPJ (somente números)"
              name="cnpj"
              register={ register }
              error={ errors.cnpj?.message }
            />

            <label className="text-2xl text-primary" >Endereço</label>
            <Input
              type="text"
              placeholder="Endereço da empresa"
              name="address"
              register={ register }
              error={ errors.address?.message }
            />

            <button 
              className="mt-6 bg-primary w-full rounded-2xl px-4 py-3 text-xl text-white font-bold"
            >
              Salvar
            </button>
          </form>
        </section>
      </Container>
    </div>
  );
};