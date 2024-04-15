import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom"
import { auth } from '../database/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitGoogle = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <div className='w-full flex flex-col mx-auto h-[100vh]'>
      <div className='w-[80vw] bg-gray-300 m-auto py-8 rounded-lg shadow-md'>
        <h1 className='mx-auto text-3xl font-bold uppercase text-center'>Entrar</h1>
        <form className='w-full flex flex-col py-4 px-8 mt-5'>
          <label htmlFor="email" className='input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
            <AiOutlineMail />
            <input className='grow' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password" className='input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
            <AiOutlineLock />
            <input className='grow' type="password" name='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <Link to='/signup' className='text-sm mb-2 text-center'>Não tenho uma conta <span className='underline'>Cadastrar-se</span></Link>
          <div className='flex px-4 justify-center'>
            <button className='btn mx-2' onClick={handleSubmit}>Entrar</button>
            <button className='btn' onClick={handleSubmitGoogle}><FcGoogle /> Entrar com google</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignIn