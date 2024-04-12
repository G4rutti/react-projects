import React, {useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const home = () => {
  const [authUser, setAuthUser] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const sair = await signOut(auth)
    return sair
  }

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
    <div className='w-full min-h-[100vh] m-auto flex flex-col justify-center items-center'>
      <h1 className='mb-5 font-bold'>Email: <span className='uppercase'>{authUser?.email}</span></h1>
      <button className='btn' onClick={handleSubmit}>Deslogar</button>
    </div>
  )
}

export default home