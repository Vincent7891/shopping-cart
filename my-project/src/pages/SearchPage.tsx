import {Offcanvas} from "react-bootstrap";
import { ProductContext } from "../context/ProductsContext";
import { useContext } from "react";
import { useSearchBar } from "../context/SearchBarContext";

type SearchPageProps = {
    isOpen: boolean
}



export function SearchPage({isOpen}:SearchPageProps) {

    const {closeSearch} = useSearchBar()
    const {products} = useContext(ProductContext);  


    return(
        <Offcanvas className = "overflow-auto" show={isOpen} onHide = {closeSearch} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Page</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}