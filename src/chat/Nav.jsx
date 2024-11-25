import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();
  return (
    <div className='bg-violet-800 text-white w-full gap-3 flex justify-start items-center px-7 h-20 z-10 text-xl font-bold'>

      <button onClick={(e) => navigate('/')}><ArrowLeft /></button>
      Username
    </div>
  )
}

export default Nav
