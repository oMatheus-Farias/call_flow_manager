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
    <div>
      <input
        className="w-full rounded-xl h-12 max-w-lg px-6 items-center bg-placeholder text-white border-0 outline-none mb-8"
        type={ type }
        placeholder={ placeholder }
        { ...register(name, rules) }
        id={ name }
      />
      { error && <p>{ error }</p> }
    </div>
  );
};