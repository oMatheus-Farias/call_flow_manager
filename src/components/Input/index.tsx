import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface InputProps {
  type: string,
  placeholder: string,
  name: string,
  register: UseFormRegister<any>,
  error?: string,
  rules?: RegisterOptions
};

export default function Input({ type, placeholder, name, register, error, rules }: InputProps){
  return(
    <div className="w-full mb-8 flex flex-col items-center max-w-lg mt-2" >
      <input
        className="w-full rounded-xl h-12 max-w-lg px-6 bg-placeholder text-white border-0 outline-none"
        type={ type }
        placeholder={ placeholder }
        { ...register(name, rules) }
        id={ name }
      />
      { error && <p className="p-0 text-redColor mr-auto" >{ error }</p> }
    </div>
  );
};