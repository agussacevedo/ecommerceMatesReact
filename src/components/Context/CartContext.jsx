import { createContext, useState, useContext } from "react";

export const CartContext=createContext();

//export const useCartContext = () => useContext(CartContext)

export const CartProvider=({children})=>{
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {

        setCartList( [ ...cartList, item ] )
    }

    const isInCart = (item) => {
         return cartList.find(manga => manga.id === item.id) === undefined;
    }

    const precioTotal = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }

    const cantidadTotalItem = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)
    }

    const removeItem= (id) => {
        setCartList( cartList.filter(item => item.id !== id) )
    }

    const vaciarCart=()=>{
        setCartList( [])
    }


    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            precioTotal,
            removeItem,
            cantidadTotalItem
        }}>
            {children}
        </CartContext.Provider>
    )
}


// import {createContext} from "react"
// import {useState} from "react"

// export const CartContext=createContext();

// export const CartProvider=({children})=>{
//     const [cart, setCart]=useState([]);

//     const addItem=(item)=>{
//         setCart( [...cart, item] )
//     }

//     const isInCart=(id)=>{
//         return cart.some(prod=>prod.id === id);
//     }

//     const cartQuantity=()=>{
//         return cart.reduce((acc, prod)=>acc += prod.cantidad, 0)
//     }

//     const precioTotal=()=>{
//         return cart.reduce((acc, prod)=>acc += prod.price * prod.cantidad, 0)
//     }

//     const emptyCart=()=>{
//         setCart([])
//     }

//     const removeItem=(id)=>{
//         setCart(cart.filter((prod)=>prod.id !== id))
//     }

//     return <CartContext.Provider value={{
//                 cart,
//                 addItem,
//                 isInCart,
//                 cartQuantity,
//                 precioTotal,
//                 emptyCart,
//                 removeItem
//             }}>
//             {children}
//     </CartContext.Provider>
// }