import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"

import Home from "./pages/home.jsx"
import Cart from './pages/cart.jsx'

// Components
import Header from './components/Header.jsx'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
