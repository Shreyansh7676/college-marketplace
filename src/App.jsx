import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { ProductProvider } from './Context/ProductContext'

function App() {
  return (
    <ProductProvider>
      <main className="bg-black h-full">
        <Navbar />
        <Home />
      </main>

    </ProductProvider>
  )
}

export default App
