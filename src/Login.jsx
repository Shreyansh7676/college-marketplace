import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Bigbar from './Menu'
import { Eye } from 'lucide-react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase/Firebase'

function Login() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [show, setShow] = useState("password")

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully");
            navigate('/')
        } catch (error) {
            alert("Error, Please give correct details")
        }
    }
    return (
        <div className="bg-black space-y-4 mx-auto h-full flex justify-center items-center py-24">
            <section>
                <div class="flex items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-8 max-w-3xl">
                    <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                        <div class="mb-2 flex justify-center">
                            <h2 class="text-center text-4xl font-bold leading-tight text-white">
                                Thapar Mart
                            </h2>
                        </div>
                        <h2 class="text-center text-xl font-bold leading-tight text-white">
                            Sign in to your account
                        </h2>
                        <div className='flex space-x-2'>
                            <p class="mt-2 text-center text-sm text-gray-300">
                                Don't have an account?
                            </p>
                            <a class="mt-2 text-center text-sm text-gray-300" href='register'>Create a free account</a>
                        </div>

                        <form class="mt-8" method="POST" action="#" onSubmit={handleLogin}>
                            <div class="space-y-5">
                                <div>
                                    <label class="text-base font-medium text-gray-300">
                                        Email address
                                    </label>
                                    <div class="mt-2">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            class="flex h-10 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between">
                                        <label class="text-base font-medium text-gray-300">
                                            Password
                                        </label>
                                        <a
                                            class="text-sm font-semibold text-gray-100 hover:underline"
                                            title=""
                                            href="#"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div class="mt-2 flex gap-3 border border-gray-200 rounded-md">
                                        <input
                                            placeholder="Password"
                                            type={show ? 'password' : 'text'}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            class="flex h-10 w-full text-white  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                        <Eye className='text-white flex justify-center m-2 items-center' onClick={() => setShow(!show)} />
                                    </div>
                                </div>
                                <div>


                                </div>
                                <div>
                                    <button
                                        class="inline-flex w-full items-center mb-2 justify-center rounded-md bg-violet-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-transparent hover:border-2 hover:border-violet-600 duration-100"
                                        type="submit" onClick={handleLogin}
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login
