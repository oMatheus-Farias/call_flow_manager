import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth"; // ESTILIZAR A FOTO DE PERFIL

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from "../../components/Container";
import avatarUrl from "../../assets/avatar.png";

import toast from "react-hot-toast";

import { db, storage } from "../../service/firebaseConnection";
import { doc, updateDoc } from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Profile(){
  const { user, setUser, handleSignOut, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name || '');
  const email = user && user.email || '';
  const [imageUrl, setImageUrl] = useState(user && user.avatarUrl);
  
  const propsUploadBytes = new TextEncoder().encode();
  const [imageAvatarStorage, setImageAvatarStorage] = useState(null || propsUploadBytes);

  function signOut(): void{
    handleSignOut();
  };

  function handleFile(event: any){
    if(event.target.files[0]){
      const image = event.target.files[0];

      if(image.type === 'image/jpeg' || image.type === 'image/png'){
        setImageAvatarStorage(image);
        setImageUrl(URL.createObjectURL(image));
      }else{
        toast.error('Envie uma imagem do tipo JPEG ou PNG');
        setImageAvatarStorage(propsUploadBytes);
        return;
      };
    };
  };

  async function handleSubmit(event: any){
    event.preventDefault();

    if(imageUrl === null && name !== ''){
      const uid = user?.uid || '';
      const docRef = doc(db, "users", uid);

      await updateDoc(docRef, {
        name: name
      })
      .then(() => {
        let data = {
          uid: uid,
          name: name,
          email: user?.email || '',
          avatarUrl: user?.avatarUrl
        };

        setUser(data);
        storageUser(data);
        toast.success('Perfil atualizado com sucesso!');
      })
      .catch((error) => {
        console.log('Erro ao atualizar perfil', error);
        toast.error('Ocorreu um erro ao tentar atualizar o perfil');
      });
    }else if(imageUrl !== null && name !== ''){
      handleUpload();
    };
  };

  async function handleUpload(){
    const uid = user?.uid || '';

    const uploadRef = ref(storage, `images/${uid}/${imageAvatarStorage}`);
    
    const upload = await uploadBytes(uploadRef, imageAvatarStorage)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
      .then(async (dowloadUrl) => {
        const photographUrl = dowloadUrl;
        
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
          avatarUrl: photographUrl,
          name: name
        })
        .then(() => {
          let data = {
            uid: uid,
            name: name,
            email: user?.email || '',
            avatarUrl: photographUrl
          };
  
          setUser(data);
          storageUser(data);
          toast.success('Perfil atualizado com sucesso!');
        })
        .catch((error) => {
          console.log('Erro ao atualizar perfil', error);
          toast.error('Ocorreu um erro ao tentar atualizar o perfil');
        });
      });
    })
    .catch((error) => {
      console.log('Erro ao tentar salvar a imagem', error);
      toast.error('Erro ao tentar salvar a imagem');
    });
  };

  return(
    <div className="bg-offWhite md:flex" >
      <Nav/>

      <Container>
        <Header
          title='Perfil'
          icon={
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
          }
        />

        <section className="bg-white rounded-xl p-4" >
            <form className="flex flex-col max-w-lg" onSubmit={ handleSubmit } >
              <div className="max-w-[15.6em] max-h-[15.6em] relative cursor-pointer mb-4" >
                <img
                  className="rounded-full z-10 object-cover w-36 h-36"
                  src={ imageUrl === null ? avatarUrl : imageUrl }
                  alt="Foto de perfil do usuário"
                />

                <svg className="absolute left-[3.6em] top-[3.6em] w-7 h-7 text-white opacity-40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/>
                </svg>

                <input 
                  className="absolute top-0 cursor-pointer h-[9.6em] w-[9.6em] opacity-0"
                  type="file" accept="image/*" 
                  onChange={ handleFile }
                />
              </div>

              <label className="text-2xl text-primary mb-2" >Nome</label>
              <input
                className="w-full bg-placeholder rounded-2xl px-4 py-3 text-base text-white"
                type="text"
                name="name"
                value={ name }
                onChange={ (event) => setName(event.target.value) }
              />

              <label className="text-2xl text-primary mb-2 mt-6" >Email</label>
              <input
                className="w-full bg-placeholder rounded-2xl px-4 py-3 text-base text-greyColor cursor-no-drop"
                type="email"
                name="email"
                value={ email }
                disabled
              />

              <button 
                className="mt-6 bg-primary w-full rounded-2xl px-4 py-3 text-xl text-white font-bold"
              >
                Salvar
              </button>
            </form>
        </section>

        <section className="mt-4 bg-white w-full rounded-xl px-4 py-2" >
          <button 
            className="border border-primary px-3 py-2 rounded-xl text-lg text-primary font-bold" 
            onClick={ signOut }
          >
              Sair
            </button>
        </section>
      </Container>
    </div>
  );
};