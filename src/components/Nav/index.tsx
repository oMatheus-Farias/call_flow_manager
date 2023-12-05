import avatarImgNull from "../../assets/avatar.png";

export default function Nav(){
  return(
    <nav className="max-w-[16.2em] h-full bg-gradient-to-t from-secondary to-primary rounded-r-[2.5em]" >
      <div className="flex flex-col items-center justify-center" >
        <img
          className="object-cover max-w-[6.4em] max-h-[6.4em] rounded-full border-4 border-white mt-4 mb-16"
          src={ avatarImgNull }
          alt="Foto do usuario"
        />
      </div>
    </nav>
  );
};