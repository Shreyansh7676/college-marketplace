import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Bigbar from './Menu'

function Login() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (email && email.length > 0) {
            navigate('/')
        }
    }
    return (
        <div className="bg-black space-y-4 mx-auto h-full flex justify-center items-center py-28">
            <section>
                <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 max-w-3xl">
                    <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                        <div class="mb-2 flex justify-center"></div>
                        <h2 class="text-center text-2xl font-bold leading-tight text-white">
                            Sign in to your account
                        </h2>
                        <div className='flex space-x-2'>
                            <p class="mt-2 text-center text-sm text-gray-300">
                                Don't have an account? 
                            </p>
                            <a class="mt-2 text-center text-sm text-gray-300" href='register'>Create a free account</a>
                        </div>

                        <form class="mt-8" method="POST" action="#">
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
                                    <div class="mt-2">
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            required
                                            class="flex h-10 w-full rounded-md text-white border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                    </div>
                                </div>
                                <div>

                                
                                </div>
                                <div>
                                    <button
                                        class="inline-flex w-full items-center mb-2 justify-center rounded-md bg-violet-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-transparent hover:border-2 hover:border-violet-600 duration-100"
                                        type="button" onClick={handleLogin}
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
