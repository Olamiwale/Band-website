import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Booking from './components/Booking'
import HomePage from './components/HomePage'
import Contact from './components/Contact'



export default function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Booking />
      <Contact />      
    </div>
  )
}
