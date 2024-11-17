import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import Navbar from './Navbar'
import { auth, db } from './Firebase/Firebase'

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <>
            <div className='bg-black'>
                <Navbar />
                <div className='text-white flex flex-col justify-center items-center h-full mx-auto py-14'>
                    {userDetails ? (
                        <>
                            <div className='flex flex-col items-center justify-center py-48'>
                                <h3>Welcome {userDetails.name} 🙏🙏</h3>
                                <p>Email: {userDetails.email}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div class="text-center h-full py-56">
                                <div
                                    class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-800 mx-auto"
                                ></div>
                                <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                                <p class="text-zinc-600 dark:text-zinc-400">
                                    "Campus Deals, Student Steals!"
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile
