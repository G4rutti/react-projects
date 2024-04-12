import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { auth } from "../firebase.js"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            return nav('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center'>
            <form className='w-[80vw] flex flex-col items-center mx-auto p-5 bg-neutral-content rounded-md md:w-[20vw]' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold mb-4'>Sign-In</h1>
                <label className="input input-bordered rounded flex items-center gap-2 my-3" htmlFor='email'>
                    <input name="email" type="email" className="grow" placeholder="Digit your email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </label>
                <label className="input input-bordered rounded flex items-center gap-2 my-3">
                    <input type="text" className="grow" placeholder="Digit your password" onChange={(e) => setPassword(e.target.value)} required value={password} />
                </label>
                <Link to='/signUp' className='text-sm mb-2'>Não tenho conta. <span className='underline'>Cadastrar-se</span></Link>
                <input type="submit" value="Entrar" className='btn rounded mt-3' />
            </form>
        </div>
    )
}

export default SignIn