import React, { useState } from 'react'
import { ImagePlus } from 'lucide-react';

function Input() {
  const [img, setImg] = useState();
  return (
    <div>
      <div className='flex border border-neutral-800 rounded-sm px-3 justify-between z-50' id='input'>
        <input
          type="text"
          placeholder='Enter your message'
          className='h-12 placeholder:text-white w-11/12 outline-none bg-black text-white'
        />
        <div className='flex'>
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <button className='flex items-center justify-center py-3'>
              <ImagePlus className="h-5 w-5 mx-3 cursor-pointer text-white" />
            </button>
          </label>
          <button className='text-white'>Send</button>
        </div>
      </div>
    </div>

  )
}

export default Input
