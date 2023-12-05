import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }){
  return(
    <div className="mt-4 md:ml-4 md:mt-0" >
      { children }
    </div>
  );
};