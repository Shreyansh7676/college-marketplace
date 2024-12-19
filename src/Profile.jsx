import React, { useEffect, useState } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import { auth, db } from './Firebase/Firebase';

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMyOrders = async (userId) => {
        try {
            const collectionRef = collection(db, 'products');
            const q = query(collectionRef, where('userID', '==', userId));
            const result = await getDocs(q);
            return result.docs;
        } catch (error) {
            console.error('Error fetching orders:', error);
            return []; // Return an empty array on error
        }
    };

    const fetchUserData = async (user) => {
        try {
            const docRef = doc(db, 'Users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
            } else {
                console.log('No user data found');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                await fetchUserData(user);
                const orders = await fetchMyOrders(user.uid);
                setProducts(orders);
            } else {
                console.log('User is not logged in');
                setUserDetails(null);
                setProducts([]);
            }
            setLoading(false);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="text-white flex flex-col justify-center items-center h-full mx-auto py-20">
                {loading ? (
                    <div className="text-center h-full py-56">
                        <div
                            className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-800 mx-auto"
                        ></div>
                        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            "Campus Deals, Student Steals!"
                        </p>
                    </div>
                ) : userDetails ? (
                    <>
                        <div className="flex flex-col items-center justify-center py-4">
                            <h3>Welcome {userDetails.username} 🙏🙏</h3>
                            <p>Email: {userDetails.email}</p>
                        </div>
                        <div className="text-white font-bold text-3xl mt-8">Your Product Ads</div>
                        <div className="mx-auto grid w-full h-full max-w-7xl items-center space-y-4 px-2 py-12 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                            {products.map((product) => (
                                <ProfileCard
                                    link={`/books/orders/${product.id}`}
                                    key={product.id}
                                    id={product.id}
                                    {...product.data()}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center h-full py-56">
                        <h2 className="text-zinc-900 dark:text-white mt-4">No User Logged In</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            "Please log in to view your profile."
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
