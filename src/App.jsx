import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pic from "/photo.avif"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import toast, { Toaster } from 'react-hot-toast';
function App() {
 

  return (
    <>
     <div>
     <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
     </div>
    <Toaster/>
    </>
  )
}

export default App
