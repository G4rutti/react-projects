import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

// Pages
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Home from './pages/Home.jsx'

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
      setIsAuthReady(true);
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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to='/signIn' />} />
            <Route path='/signup' element={authUser ? <Home /> : <SignUp />} />
            <Route path='/signin' element={authUser ? <Home /> : <SignIn />} />
          </Routes>
        </BrowserRouter>
      )}

    </div>
  )
}

export default App
