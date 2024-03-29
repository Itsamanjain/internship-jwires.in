import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Goal from './components/Goal'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footers'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Navbar/>
    <Home/>
    <Goal/>
    <Project/>
    <Product/>
    <About/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
