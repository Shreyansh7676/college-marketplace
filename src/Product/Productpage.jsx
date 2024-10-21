import React from 'react'
import Navbar from '../Navbar'
import Img1 from '../assets/044a4pYZNk91QwMe8l3DSM1-5.fit_lim.v1708624706.jpg'

function Productpage() {
    return (
        <>

            <div className='bg-black'>
                <Navbar />
                <div>
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-center space-y-4 px-2 py-8 md:flex-row md:gap-24 md:space-y-0 lg:grid-cols-4">
                        <div className='max-w-2xl gap-10'>
                            <div> 
                                <img src={Img1} alt='Product-Image' className='h-96 rounded-md' />
                            </div>
                            <div className='mt-4 grid md:grid-cols-4 gap-7 rounded-md bg-neutral-800 p-3'>
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                            </div>
                        </div>
                        <div className='max-w-lg'>
                            <h2 className='text-white text-left font-bold'>Gaming Keyboard</h2>
                            <h3 className='text-white text-left font-semibold'>₹1500</h3>
                            <h5 className='text-gray-400 text-left text-base font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, amet! Temporibus odio nemo cupiditate, nesciunt modi quisquam! Facilis nostrum nobis neque, iusto error possimus quos, quas corporis, architecto sint dolorum culpa aliquam est unde quo beatae! Vitae delectus accusamus dolores.</h5>
                            <h5 className='text-gray-400 text-left text-sm underline font-normal'>Posted by: DOAA</h5>
                            <div className='flex gap-7'>
                                <button className="mt-4 cursor-pointer flex flex-col items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 hover:scale-105 active:border active:border-violet-400 rounded-md duration-100 p-2">
                                    <span className="text-base text-white font-semibold p-1">Buy Now</span>
                                </button>
                                <button className="mt-4 cursor-pointer flex flex-col items-center justify-center fill-violet-400 bg-violet-800 hover:bg-transparent hover:border-2 hover:border-violet-700 rounded-md duration-100 p-1">
                                    <span className="text-base text-white font-semibold p-1">Message Seller</span>
                                </button>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default Productpage
