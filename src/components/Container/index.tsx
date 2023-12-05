import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }){
  return(
    <div className="w-full px-4 mt-4" >
      { children }
    </div>
  );
};