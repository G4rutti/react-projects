import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";

const Home = () => {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    setUser(user)
  });
  
  return (
    <div>
      <p>Seja bem vindo, <span>{user?.displayName}.</span></p>
    </div>
  )
}

export default Home