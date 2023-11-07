import { ProductContext } from "../context/ProductsContext";
import { useContext, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Shop() {
  const { products } = useContext(ProductContext);  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const {getItemQuantity,increaseCartQuantity} = useShoppingCart();
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get the products to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);}
  return (
    <>
      <div className="p-24 grid grid-cols-3 gap-12">
        {currentItems.map(product => (
          <div className="border-black border-2 flex flex-col items-center" key={product.id}>
            <h2>{product.title}</h2>
            <button className="border-black border-2" onClick={() => increaseCartQuantity(product.id)}>
        Add to cart ({getItemQuantity(product.id)})
      </button>            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex gap-4">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`border px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
