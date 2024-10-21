import React from 'react'
import Overlay from './Overlay'
import Navbar from './Navbar'


export default function ProductThree() {
  return (
    <>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
       
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="rounded-md border hover:scale-105 transition duration-150 ease-in-out hover:bg-neutral-900 hover:shadow-2xl hover:shadow-violet-500 m-3">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-cover"
          />
          <div className="p-3">
            <h1 className="inline-flex items-center text-lg font-semibold text-white">₹ 5000</h1>
            <p className="text-sm text-gray-300">
              Nike AirMax V2, Used for 1yr
            </p>
            <p className="text-sm text-gray-400">
              Hostel-O
            </p>

            {/* <button title="Save" class="cursor-pointer flex items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
              
              <span class="text-sm text-white">Buy Now</span>
            </button> */}
            <Overlay />
      
        </div>
        </div>
  ))
}
    </div >
    </>
  )
}
