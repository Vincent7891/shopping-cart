import {Offcanvas} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type shoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}:shoppingCartProps) {
    const {closeCart} = useShoppingCart()
    return(
        <Offcanvas show={isOpen} onHide = {closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )

}