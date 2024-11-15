import React from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'
import Bigbar from './Menu'
import { ChevronDownIcon } from 'lucide-react'
import { SearchIcon, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './Firebase/Firebase'

export function ExampleNavbarFour() {
    const [userDetail, setUserDetail] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetail(docSnap.data());
                // console.log(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleProfile = () => {
        navigate('/profile')
    }

    async function handleLogout() {
        try {
            await auth.signOut();
            navigate('/login')
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSell = () => {
        { userDetail ? navigate('/sell') : alert("You need to login in order to sell your products") }

    }
    return (
        <div className="sticky top-0 w-full bg-black/80 py-4 backdrop-blur-lg z-40 border-b-2 border-gray-400">
            <div className="mx-auto flex max-w-7xl items-center justify-around  px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <a className="font-bold text-white text-3xl sm:text-md no-underline" href='/'>Thapar Mart</a>
                </div>

                <div className="hidden lg:block">
                    <div className="flex flex-row bg-neutral-800 border-zinc-800 border-4 rounded-md">

                        {/* <select className="bg-transparent text-white">
                            <option value="someOption" className="text-white bg-black">TIET</option>
                            <option value="otherOption" className="text-white bg-black">IIT Patiala</option>
                        </select> */}
                        {/* <select className="flex h-10 w-full bg-transparent text-white px-2 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900">
                            <option className="bg-neutral-800 text-md">TIET</option>
                            <option className="bg-neutral-800">IIT Patiala</option>

                        </select> */}
                        <div className="hidden lg:block justify-end">
                            <input
                                className="flex h-10 sm:w-20 lg:w-80 bg-neutral-800 px-3 py-2 text-sm text-white placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Search"
                            ></input>

                        </div>
                        <button>
                            <SearchIcon onClick={toggleMenu} className="h-5 w-5 mx-2 cursor-pointer text-white" />
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block px-8 space-y-4">
                    <button title="Save" onClick={handleSell} className="cursor-pointer flex flex-col items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 hover:scale-105 active:border active:border-violet-400 rounded-md duration-100 p-2">
                        <span className="text-md text-white font-bold p-2">Sell Now</span>
                    </button>


                </div>
                {/* <div>
                    <button>
                        <ShoppingCart onClick={toggleMenu} className="h-6 w-6 text-yellow-50 space-y-4 cursor-pointer hover:text-violet-800 hover:scale-105" />
                    </button>
                </div> */}

                <div className="ml-2 hidden lg:block">

                    {userDetail ? (
                        <>
                            <div className='flex'>
                                <button title="Save" className="cursor-pointer flex flex-col items-center fill-violet-400 bg-transparent hover:bg-violet-900 hover:scale-105 hover:text-violet-600 active:border active:border-violet-400 rounded-md duration-100 p-2">
                                    <span className="text-md text-white hover:text-violet-600 font-bold p-2" onClick={handleProfile}>My Profile</span>
                                </button>
                                <button title="Save" className="cursor-pointer flex flex-col items-center fill-violet-400 bg-transparent hover:bg-violet-900 hover:scale-105 hover:text-violet-600 active:border active:border-violet-400 rounded-md duration-100 p-2">
                                    <span className="text-md text-white hover:text-violet-600 font-bold p-2" onClick={handleLogout}>Logout</span>
                                </button>
                            </div>
                            
                        </>
                    ) : (
                        <button title="Save" className="cursor-pointer flex flex-col items-center fill-violet-400 bg-transparent hover:bg-violet-900 hover:scale-105 hover:text-violet-600 active:border active:border-violet-400 rounded-md duration-100 p-2">
                            <span className="text-md text-white hover:text-violet-600 font-bold p-2" onClick={handleLogin}>Login</span>
                        </button>
                    )}
                </div>
                <div className="ml-2 lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span className="font-bold text-white">College Marketplace</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {/* {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-white">
                                                    {item.name}
                                                </span>
                                                <span>
                                                    
                                                </span>
                                            </a>

                                        ))} */}

                                    </nav>

                                    <div className="flex flex-col py-8 gap-2">
                                        <select className="flex h-10 w-full bg-transparent text-white px-2 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900">
                                            <option className="bg-neutral-800 text-md">TIET</option>
                                            <option className="bg-neutral-800">IIT Patiala</option>

                                        </select>
                                        <div className="flex bg-neutral-800">
                                            <input
                                                className="flex h-10 w-full rounded-md bg-neutral-800 px-3 py-3 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Search"
                                            ></input>
                                            <button>
                                                <SearchIcon onClick={toggleMenu} className="h-5 w-5 mx-2 cursor-pointer text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none w-full"
                                        >
                                            <span
                                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                            >
                                            </span>
                                            <span
                                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                            >
                                                Sell Now

                                            </span>
                                        </button>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ExampleNavbarFour