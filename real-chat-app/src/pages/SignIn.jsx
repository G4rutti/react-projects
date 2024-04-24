import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom"
import { auth } from '../database/firebase';
import { useAuthentication } from '../hooks/useAuthentication';


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { signIn, error } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    signIn(auth, email, senha)

  }

  const handleSubmitGoogle = (e) => {
    e.preventDefault()
    signWithGoogle(auth)
  }

  return (
    <div className='w-full flex flex-col mx-auto h-[100vh]'>

      <div className='w-[80vw] bg-neutral m-auto py-8 rounded-lg shadow-md text-neutral-content md:w-[40vw] lg:w-[40vw] xl:w-[30vw]'>

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
            <button className='btn hidden md:flex' onClick={handleSubmitGoogle}><FcGoogle /> Entrar com google</button>
          </div>
        </form>

      </div>
      <div className='w-[80vw] mx-auto relative bottom-[20vh] md:w-[40vw] lg:w-[40vw] xl:w-[30vw] md:bottom-[15vh]'>
        {error !== null && (
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignIn