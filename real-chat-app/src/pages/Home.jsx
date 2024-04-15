import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";

// Components:
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';

// MicroData:
import { chatRooms } from '../data/chatRooms';

const Home = () => {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    setUser(user)
  });

  return (
    <div>
      <NavBar />
      <div className='flex flex-col w-full'>
        {/* <p>Seja bem vindo, <span>{user?.displayName}.</span></p> */}
        <h1 className='text-3xl uppercase font-bold mx-auto mt-10'>Escolha uma sala</h1>
        <div className='w-full justify-center mt-10 grid md:grid-cols-2'>
          {chatRooms.map((item) => (
              <Cards data={item} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Home