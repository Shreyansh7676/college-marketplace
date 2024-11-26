import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from './Firebase/Firebase'
import Navbar from './Navbar'

function ViewOrders() {
    const params = useParams()
    const firebase = useFirebase();
    console.log(params)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        firebase.getOrders(params.id).then((orders) => setOrders(orders.docs))
    }, [])

    return (
        <>
            <div className=' bg-black my-auto mx-auto'>
                <Navbar />
                <div className='h-full w-full py-36'>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-white'> View Orders Details</h1>
                        <div className='mt-2 mb-56 h-full max-w-7xl items-center space-y-4 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
                            {
                                orders.map(order => {
                                    const data = order.data()
                                    return (
                                        <>
                                            <div className='flex flex-col items-center m-3'>
                                                <div className='border flex flex-col items-center px-20 py-8 rounded-md'>
                                                    <div key={order.id} className='flex flex-col items-center'>
                                                        <h3 className='text-white'>Order by: {data.displayName}</h3>
                                                        <p className='text-gray-400'>Email: {data.userEmail}</p>
                                                    </div>
                                                    <div>
                                                        <button className="mt-1 cursor-pointer flex flex-col items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 hover:scale-105 active:border active:border-violet-400 rounded-md duration-100 p-2">
                                                            <span className="text-base text-white font-semibold p-1">Sell to: {data.displayName}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewOrders
