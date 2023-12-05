interface HeaderProps {
  title: string,
  icon: React.ReactElement
};

export default function Header({ title, icon }: HeaderProps){

  return(
    <header className="flex items-center gap-4 px-6 py-3 mb-6 bg-white rounded-xl md:max-h-24 md:w-full" >
      <svg className="w-8 h-8 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" >
        { icon }  
      </svg> 
      <h1 className="text-3xl font-bold text-primary" >{ title }</h1>
    </header>
  );
};