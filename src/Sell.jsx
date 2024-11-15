import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from './Firebase/Firebase';
import { getAuth } from 'firebase/auth';


function Productpage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [hostel, setHostel] = useState("")
    const [picture, setPicture] = useState("")
    const navigate = useNavigate();
    const firebase = useFirebase();
    const auth = getAuth();
    const user = auth.currentUser;


    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.handleCreateNewListing(title, name, description, price, hostel, picture, user);
        navigate('/');
    };

    return (
        <>
            <div className='bg-black'>
                <Navbar />
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mx-auto flex flex-col w-full max-w-7xl items-start justify-center space-y-4 px-2 py-8 md:flex-col md:gap-6 md:space-y-0 lg:grid-cols-4">
                            <div className='w-full'>
                                <div className='space-x-4 justify-between'>
                                    <label class="text-left font-medium text-gray-300">
                                        Add Title*
                                    </label>
                                    <label class="text-right font-light text-gray-400">
                                        (Upto 50 words!)
                                    </label>
                                </div>

                                <div class="mt-2">
                                    <input
                                        placeholder="Add Title"
                                        type="text"
                                        required
                                        maxLength={50}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        class="flex h-12 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='space-x-4 justify-between'>
                                    <label class="text-left font-medium text-gray-300">
                                        Your Name*
                                    </label>
                                    <label class="text-right font-light text-gray-400">
                                        (Upto 50 words!)
                                    </label>
                                </div>

                                <div class="mt-2">
                                    <input
                                        placeholder="Add Title"
                                        type="text"
                                        required
                                        maxLength={50}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        class="flex h-12 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='space-x-4'>
                                    <label class="text-left font-medium text-gray-300">
                                        Add Description*
                                    </label>
                                    <label class="text-right font-light text-gray-400">
                                        (Upto 100 words!)
                                    </label>
                                </div>
                                <div class="mt-2">
                                    <textarea
                                        className="flex h-32 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                        id="message"
                                        placeholder="Add Description"
                                        required
                                        value={description}
                                        maxLength="100"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div className='w-full md:w-1/4'>
                                <label class="text-base font-medium text-gray-300">
                                    Price*
                                </label>
                                <div class="mt-1">
                                    <input
                                        placeholder="Add Price"
                                        type="number"
                                        required
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        class="flex h-12 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                    />

                                </div>
                            </div>
                            <div className='w-full md:w-1/4'>
                                <label class="text-base font-medium text-gray-300">
                                    Hostel*
                                </label>
                                <div class="mt-1">
                                    <input
                                        placeholder="Your Hostel"
                                        type="text"
                                        required
                                        value={hostel}
                                        onChange={(e) => setHostel(e.target.value)}
                                        class="flex h-12 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                    />

                                </div>
                            </div>
                            <div className='w-full md:w-1/4'>
                                <label class="text-base font-medium text-gray-300">
                                    Add Images
                                </label>
                                <div class="mt-1">
                                    <input
                                        type="file"
                                        required
                                        accept="image/png,image/jpeg"
                                        onChange={(e) => setPicture(e.target.files[0])}
                                        class="flex h-12 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                    />

                                </div>
                            </div>
                            <div>
                                <button
                                    class="inline-flex w-full mb-3 items-center justify-center rounded-md bg-violet-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-transparent hover:border-2 hover:border-violet-600 duration-100"
                                    type="submit"
                                >
                                    Post Now
                                </button>
                            </div>
                        </div >
                    </form>
                </div>
            </div>
        </>
    )
}

export default Productpage
