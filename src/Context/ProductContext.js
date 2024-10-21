import { createContext, useContext } from "react";

export const ProductContext=createContext({
    product:[{
        id:1,
        title:"FCB jersey",
        image:"image",
        price:"5.00 rs",
        desc:"description"
    }],
    addProduct: (todo)=>{},
    updateProduct: (id,todo)=>{},
    deleteProduct: (id)=>{}
})

export const useProduct=()=>{
    return useContext(ProductContext)
}

export const ProductProvider=ProductContext.Provider