import React from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFirebase } from '../Firebase/Firebase'


function Productpage() {
    const params = useParams();
    const firebase = useFirebase();
    const [data, setData] = useState(null);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        firebase.getProductDetails(params.id).then((value) => setData(value.data()));
    }, [])
    console.log(data)
    // console.log(userName)
    useEffect(() => {
        if (data) {
            const imageURL = data.imageURL;
            firebase.getImageURL(imageURL).then((url) => setUrl(url))
        }
    }, [data]);
    if (data == null) {
        return (
            <div className="text-center h-full py-72 bg-black">
                
                <div
                    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-800 mx-auto"
                ></div>
                <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    "Campus Deals, Student Steals!"
                </p>
            </div>
        );
    }

    return (
        <>
            <div className='bg-black'>
                <Navbar />
                <div>
                    <div className="mx-auto flex flex-col w-full max-w-7xl items-center justify-center space-y-4 px-2 py-24 md:flex-row md:gap-32 md:space-y-0 lg:grid-cols-4">
                        <div className='w-1/2 gap-10 flex-col justify-center items-center'>
                            <div>
                                <img src={url} alt='Product-Image' className='h-48 md:h-96 rounded-md' />
                            </div>
                            {/* <div className='mt-4 grid md:grid-cols-4 gap-7 w-4/5 md:w-full rounded-md bg-neutral-800 p-3'>
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                                <img src={Img1} alt='Product-Image' />
                            </div> */}
                        </div>
                        <div className='max-w-lg'>
                            <h2 className='text-white text-left font-bold'>{data.title}</h2>
                            <h3 className='text-white text-left font-semibold'>₹{data.price}</h3>
                            <h5 className='text-gray-400 text-left text-base font-normal'>{data.description}</h5>
                            <h5 className='text-gray-400 text-left text-sm underline font-normal'>Posted by: {data.name}</h5>
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
