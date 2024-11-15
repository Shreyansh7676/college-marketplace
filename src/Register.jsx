import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Bigbar from './Menu'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Eye } from 'lucide-react'
import { doc, setDoc } from 'firebase/firestore'
import { storage } from './Firebase/Firebase';
import { auth, db } from './Firebase/Firebase';

function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [show, setShow] = useState("password")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
        const allowedDomain = '@thapar.edu';
        if (!email.endsWith(allowedDomain)) {
            alert(`Sign-up is only allowed for ${allowedDomain} email addresses.`);
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name
                });
            }
            console.log("User Registered Successfully!!");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="bg-black mx-auto h-full w-full flex justify-center items-center py-12">
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 max-w-3xl">
                    <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2 flex justify-center">
                            <h2 className="text-center text-4xl font-bold leading-tight text-white">
                                Thapar Mart
                            </h2>
                        </div>
                        <h2 className="text-center text-xl font-bold leading-tight text-white">
                            Sign Up for new account
                        </h2>
                        <div className='flex space-x-2'>
                            <p className="mt-2 text-center text-sm text-gray-300">
                                Already have an account?
                            </p>
                            <a className="mt-2 text-center text-sm text-gray-300" href='login'>Sign in to your account</a>
                        </div>

                        <form className="mt-2" method="POST" action="#" onSubmit={handleRegister}>
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-300">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Your Name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="flex h-10 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-300">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex h-10 w-full rounded-md border text-white border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-gray-300">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2 flex gap-3 border border-gray-200 rounded-md">
                                        <input
                                            placeholder="Password"
                                            type={show ? 'password' : 'text'}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="flex h-10 w-full text-white  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 duration-100"
                                        />
                                        <Eye className='text-white flex justify-center m-2 items-center' onClick={() => setShow(!show)} />
                                    </div>
                                </div>
                                <div>

                                    <div className="mt-2 w-full">
                                        <Bigbar />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="inline-flex w-full mb-3 items-center justify-center rounded-md bg-violet-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-transparent hover:border-2 hover:border-violet-600 duration-100"
                                        type="submit"
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

export default Register
