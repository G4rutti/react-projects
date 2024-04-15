import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";
import { useAuthentication } from '../hooks/useAuthentication';


// Components:
import NavBar from '../components/NavBar';


const VerPerfil = () => {
  const [authUser, setAuthUser] = useState()
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])
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
          <button className='btn btn-neutral'>Editar Perfil</button>
          <button className='btn btn-error'>Deslogar</button>
        </div>
      </div>
      {console.log(authUser)}
    </div>
  )
}

export default VerPerfil