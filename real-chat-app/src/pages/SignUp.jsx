import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"

import { auth } from '../database/firebase';
import { useAuthentication } from '../hooks/useAuthentication';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const SignUp = () => {
    const [displayName, setDisplayName] = useState("")
    const [displayLastName, setDisplayLastName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const funcao = useAuthentication()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const usuario = {
            displayName,
            displayLastName,
            email,
            password,
        }
        console.log(usuario)
        if (password !== confirmPassword) {
            console.log("As senhas nao parecem iguais")
            setError("As senhas nao parecem iguais")
            return
        }
        funcao.criarConta(auth, usuario)

    
    }

    const handleSubmitGoogle = (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <div className='w-full flex flex-col mx-auto h-[100vh]'>
            <div className='w-[80vw] bg-gray-300 m-auto py-8 rounded-lg shadow-md'>
                <h1 className='mx-auto text-3xl font-bold uppercase text-center'>Cadastre-se</h1>
                <form className='w-full flex flex-col py-4 px-8 mt-5 '>
                    <button className='btn' onClick={handleSubmitGoogle}><FcGoogle /> Cadastrar-se com google</button>
                    <div className='w-[100%] flex'>
                        <label htmlFor="nome" className='w-[50%] input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                            <AiOutlineUser />
                            <input className='w-[100%]' type="text" name='nome' placeholder='Nome' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                        </label>
                        <label htmlFor="sobrenome" className='w-[50%]  input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                            <input className='w-[100%]' type="text" name='sobrenome' placeholder='Sobrenome' value={displayLastName} onChange={(e) => setDisplayLastName(e.target.value)} />
                        </label>
                    </div>
                    <label htmlFor="email" className='input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                        <AiOutlineMail />
                        <input className='grow' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password" className='input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                        <AiOutlineLock />
                        <input className='grow' type="password" name='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label htmlFor="passwordConfirm" className='input input-bordered my-2 py-2 px-4  flex items-center gap-2'>
                        <input className='grow' type="password" name='passwordConfirm' placeholder='Confirme a senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <Link to='/' className='text-sm mb-10 text-center'>Já tenho uma conta. <span className='underline'>Logar-se</span></Link>
                    <button className='btn' onClick={handleSubmit}>Cadastrar-se</button>

                </form>

            </div>
        </div>
    )
}

export default SignUp