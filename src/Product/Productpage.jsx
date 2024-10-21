import React from 'react'
import Navbar from '../Navbar'
import Img1 from '../assets/044a4pYZNk91QwMe8l3DSM1-5.fit_lim.v1708624706.jpg'

function Productpage() {
    return (
        <>

            <div className='bg-black'>
                <Navbar />
                <div>
                    <div className="mx-auto flex w-full max-w-7xl items-center space-y-4 px-2 py-10 md:flex-row md:gap-24 md:space-y-0 lg:grid-cols-4">
                        <div>
                            <img src={Img1} alt='Product-Image' className='h-96'/>
                        </div>
                        <div className='max-w-lg'>
                            <h2 className='text-white text-left font-bold'>Gaming Keyboard</h2>
                            <h5 className='text-gray-400 text-left text-base font-normal'>This is a mechanical red switch mechanical keyboard from logitech</h5>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default Productpage
