import { useEffect, useState, createContext, ReactNode} from "react";

// Define a type for the rating
type Rating = {
  rate: number;
  count: number;
};

// Define a type for the product with a rating property
type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: Rating;
};

// Define the context type
interface ProductContextType {
    products: Product[];
}


export const ProductContext = createContext<ProductContextType>({
} as ProductContextType);

interface ProductProviderProps {
    children: ReactNode;
}
const ProductProvider = ({children}:ProductProviderProps) =>{

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            setProducts(data)
        };
        fetchProducts()
    },[]);

    return <ProductContext.Provider value = {{products}}>{children}</ProductContext.Provider>
}

export default ProductProvider