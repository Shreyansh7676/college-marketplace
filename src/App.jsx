import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
      <main className="bg-black h-full">
        <Navbar />
        <Home />
      </main>
  )
}

export default App
