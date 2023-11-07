import { useState,createContext, useContext, ReactNode} from "react";
import { ShoppingCart } from "../pages/ShoppingCart";



type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id : number) => number
    increaseCartQuantity:(id : number) => void
    decreaseCartQuantity:(id : number) => void
    removeFromCart: (id : number) => void
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: cartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<cartItem[]>([])
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity,0)

    const getItemQuantity = (id:number) => {
        return cartItems.find(item => item.id ===id)?.quantity || 0
    }

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const increaseCartQuantity = (id:number) =>{
        setCartItems((currItems) =>{
            if(currItems.find(item => item.id === id) ==null){
                return [...currItems, {id,quantity: 1}]
            } else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else { 
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            const item = currItems.find(item => item.id === id);
            if (!item) return currItems; // If no item is found, return the current state
    
            if (item.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    

    const removeFromCart = (id:number) => {
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !==id)
        })
    }
    return(
        <ShoppingCartContext.Provider value = {{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart, cartItems,cartQuantity, openCart, closeCart}}>
            {children}
            <ShoppingCart isOpen = {isOpen}></ShoppingCart>
        </ShoppingCartContext.Provider>
    )

}