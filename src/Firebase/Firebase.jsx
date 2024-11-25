import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection, doc, getDoc, getDocs, deleteDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext, createContext } from "react";
import { AuthContext } from "../Product/AuthContext";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: import.meta.env.VITE_AUTH_DOMAIN,

  projectId: import.meta.env.VITE_PROJECT_ID,

  storageBucket: import.meta.env.VITE_BUCKET_ID,

  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;

export const FirebaseProvider = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const { currentUser } = useContext(AuthContext)

  const handleCreateNewListing = async (title, name, description, price, hostel, picture, user) => {
    if (!user) {
      throw new Error("User is not defined");
    }
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${picture.name}`);
    const uploadResult = await uploadBytes(imageRef, picture);
    return await addDoc(collection(db, "products"), {
      title,
      name,
      description,
      price,
      hostel,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
    });
  };

  const placeOrder = async (id) => {
    // Get the currently authenticated user
    const user = auth.currentUser;

    if (!user) {
      console.error("User is not logged in. Cannot place order.");
      return;
    }

    try {
      const collectionRef = collection(db, "products", id, "orders");
      const result = await addDoc(collectionRef, {
        userID: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
      });
      console.log("Order placed successfully:", result.id);
      return result;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const getProductDetails = async (id) => {
    const docf = doc(db, 'products', id);
    const result = await getDoc(docf);
    return result;
  }

  // const fetchMyOrders = async (userId) => {
  //   try {
  //     // Fetch the currently authenticated user's ID

  //     if (!currentUser || !currentUser.uid) {
  //       console.error("User is not logged in or userId is undefined.");
  //       return [];
  //     }

  //     const userId = curren.uid;

  //     // Reference the products collection
  //     const collectionRef = collection(db, "products");

  //     // Query for orders where the userID matches the current user's ID
  //     const q = query(collectionRef, where("userID", "==", userId));
  //     const result = await getDocs(q);

  //     // Map the query results into an array of data
  //     const orders = result.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     console.log("Orders fetched:", orders);
  //     return orders;
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //     return [];
  //   }
  // };

  


  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const displayProduct = async () => {
    return getDocs(collection(db, "products"));
  };

  const getOrders = async (id) => {
    const collectionRef = collection(db, "products", id, "orders");
    const result = await getDocs(collectionRef);
    return result;
  };


  return (
    <FirebaseContext.Provider
      value={{
        handleCreateNewListing,
        displayProduct,
        getImageURL,
        getProductDetails,
        placeOrder,
        getOrders,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
}

