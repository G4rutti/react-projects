import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";
import { useAuthentication } from '../hooks/useAuthentication';


// Components:
import NavBar from '../components/NavBar';


const VerPerfil = () => {
  const [authUser, setAuthUser] = useState()
  const [nomeUser, setNomeUser] = useState()
  const [photoUser, setPhotoUser] = useState(authUser?.photoURL)
  const funcao = useAuthentication()


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
        setNomeUser(user?.displayName)
        setPhotoUser(user?.photoURL)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const handleUpdate = () => {
    funcao.atualizarUser(authUser, nomeUser, photoUser)
  }
  return (
    <div>
      <NavBar />
      <div className='w-full flex flex-col items-center mt-10'>
        <div className="avatar">
          <div className="w-32 rounded">
            <img src={authUser?.photoURL ? authUser?.photoURL : "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"} />
          </div>
        </div>
        <div className='flex flex-col mt-2'>
          <h2 className='text-2xl font-semibold'>{authUser?.displayName}</h2>
        </div>
        <div className='flex gap-2 mt-2'>
          <button className='btn btn-neutral' onClick={() => document.getElementById('my_modal_5').showModal()}>Editar Perfil</button>
          <button className='btn btn-error'>Deslogar</button>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal sm:modal-middle">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Alterar Usuário</h3>
          <p className="pt-4">Altere dados do seu usuário</p>
          <div className="modal-action">
            <form method="dialog">
              <div className='flex flex-col justify-center items-center'>
                <label htmlFor="nome" className=' input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                  <input className='
                  ' type="text" name='nome' placeholder='Nome' value={nomeUser} onChange={(e) => setNomeUser(e.target.value)}/>
                </label>
                <label htmlFor="sobrenome" className='  input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                  <input className='' type="text" name='sobrenome' placeholder='Url Foto' value={photoUser} onChange={(e) => setPhotoUser(e.target.value)}/>
                </label>
              </div>
              <div className='flex gap-5'>
                <button className="btn" onClick={handleUpdate()}>Alterar Dados</button>
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      {console.log(authUser)}
    </div>
  )
}

export default VerPerfil