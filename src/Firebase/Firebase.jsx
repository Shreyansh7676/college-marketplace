import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext, createContext } from "react";



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
    });
  };

  const getProductDetails = async (id) => {
    const docf = doc(db, 'products', id);
    const result = await getDoc(docf);
    return result;
  }

  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const displayProduct = async () => {
    return getDocs(collection(db, "products"));
  };

  return (
    <FirebaseContext.Provider
      value={{
        handleCreateNewListing,
        displayProduct,
        getImageURL,
        getProductDetails,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
}

