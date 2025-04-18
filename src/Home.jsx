import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'
import { useFirebase } from './Firebase/Firebase'
import Navbar from './Navbar'


export default function ProductThree() {
  const firebase = useFirebase();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    firebase.displayProduct().then((products) => setProducts(products.docs)).catch((error) => {
      console.error('Error fetching products:', error);
    }).finally(() => {
      setLoading(false); // Set loading to false after data fetching is complete
    });
  }, [])


  if (loading) {
    return (
      <div className="text-center h-full py-56">
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
    <div className='min-h-screen'>
        <Navbar />
    
      <div className="mx-auto grid w-full max-w-7xl py-12 items-center px-2 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products && products.map(products =>
          <Card key={products.id} id={products.id} {...products.data()} />
        )}
      </div >
      </div>
    </>
  )
}
