import {Offcanvas} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ProductContext } from "../context/ProductsContext";
import { useContext } from "react";
type shoppingCartProps = {
    isOpen: boolean
}


export function ShoppingCart({isOpen}:shoppingCartProps) {
    const {closeCart,cartItems,removeFromCart,increaseCartQuantity,decreaseCartQuantity} = useShoppingCart()
    const { products } = useContext(ProductContext);  
    const getProduct = (itemId:number) => {
        return products.find((product) => product.id === itemId);
    };

    const getTotalPrice = () => {
        let sum = 0;
        cartItems.forEach((item) => {
            const product = getProduct(item.id);
            if (product) {
                sum += product.price * item.quantity;
            }
        });
        return sum;
    };
    
    return(
        <Offcanvas className = "overflow-auto" show={isOpen} onHide = {closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <div className="flex flex-col gap-40">
                {cartItems.map((item)=>{
                    const product = getProduct(item.id)
                    return(
                        <div className="flex justify-center items-center">
                            <div key={item.id} className="flex flex-col h-48 w-48">
                                <img src = {product?.image}></img>
                                <span className="p-10">{product?.price} X {item.quantity}</span>
                            </div>
                            <button className="border-black border-2 p-4" onClick={()=>removeFromCart(item.id)}>remove from cart</button>
                            <button className="border-black border-2 p-4" onClick={()=>decreaseCartQuantity(item.id)}>-</button>
                            <button className="border-black border-2 p-4" onClick={()=>increaseCartQuantity(item.id)}>+</button>

                        </div>
                    )
                })}
            </div>
            {(cartItems.length >= 1)&&(
                <div className="p-4">
                The total price is: ${getTotalPrice()}
                </div>   
            )}
         
        </Offcanvas>
    )
}