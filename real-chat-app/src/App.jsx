import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./database/firebase";

// Contexts
import { ThemeProvider } from "./context/ThemeContext";

// Pages
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import ChatRoom from "./pages/ChatRoom";
import VerPerfil from "./pages/VerPerfil";

function App() {
  const [authUser, setAuthUser] = useState()
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
      setIsAuthReady(true)
    })
    return () => {
      listen()
    }
  }, [])


  return (
    <div>
      {!isAuthReady ? (
        <p>Loading...</p>
      ) : (
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={authUser ? <Home /> : <Navigate to='/signIn' />} />
              <Route path='/signup' element={authUser ? <Home /> : <SignUp />} />
              <Route path='/signin' element={authUser ? <Home /> : <SignIn />} />
              <Route path='/sala/:id' element={authUser ? <ChatRoom /> : <SignIn />} />
              <Route path='/verPerfil' element={authUser ? <VerPerfil /> : <SignIn />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>

      )}

    </div>
  )
}

export default App