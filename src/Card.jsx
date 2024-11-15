import React from 'react'
import { useFirebase } from './Firebase/Firebase';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Card=(props)=>{
  const navigate=useNavigate();
    const handleButton=(e)=>{
      navigate(`/product/view/${props.id}`)
    }
    const firebase=useFirebase();
    const [url, setUrl]=useState(null);
    useEffect(()=>{
        firebase.getImageURL(props.imageURL).then((url)=>setUrl(url));
    },[])
  return (
    <div>
      <div className="rounded-md border hover:scale-105 transition duration-150 ease-in-out hover:bg-neutral-900 hover:shadow-2xl hover:shadow-violet-500 m-3">
          <img
            src={url}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-cover"
          />
          <div className="p-3 space-y-3">
            <h1 className="inline-flex items-center text-lg font-semibold text-white">₹ {props.price}</h1>
            <p className="text-md font-bold text-gray-300">
              {props.title}
            </p>
            <p className="text-sm text-gray-400">
              Hostel-O
            </p>

            <button title="Save" className="cursor-pointer flex items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 active:border active:border-lime-400 rounded-md duration-100 p-2" onClick={handleButton}>
              
              <span class="text-sm text-white">Buy Now</span>
            </button>
            {/* <Overlay /> */}
      
        </div>
        </div>
    </div>
  )
}

export default Card
