import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { auth } from '../database/firebase'
import { signOut } from 'firebase/auth'
import {Link} from "react-router-dom"
import { useAuthentication } from '../hooks/useAuthentication';


const NavBar = () => {
    const [nav, setNav] = useState(true)
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const funcao = useAuthentication()


    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("night");
        } else {
            setTheme("cupcake");
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html')?.setAttribute('data-theme', localTheme)
    }, [theme, theme]);
    const handleNav = () => {
        setNav(!nav)
    }
    const sair = () => {
        funcao.sair(auth)
    }

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 bg-neutral'>
            <h1 className='w-full text-3xl font-bold text-white'>DGCHAT.</h1>
            <ul className='hidden md:flex text-white'>
                <li className='p-4'><Link to="/">Home</Link></li>
                <li className='p-4 w-24'><Link to="/verPerfil">Ver perfil</Link></li>
                <li className='p-4' onClick={sair}>Sair</li>
                <li className='p-4'>
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-white'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-neutral z-10" : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"}>
                <h1 className='w-full text-3xl font-bold text-white m-4'>DGCHAT.</h1>
                <ul className='p-4 uppercase text-white'>
                    <li className='p-4 border-b border-b-gray-600'><Link to="/">Home</Link></li>
                    <li className='p-4 border-b border-b-gray-600'><Link to="/verPerfil">Ver perfil</Link></li>
                    <li className='p-4 border-b border-b-gray-600' onClick={sair}>Sair</li>
                    <li className='p-4'>
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar