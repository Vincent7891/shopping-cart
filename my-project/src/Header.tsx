import { useShoppingCart } from "./context/ShoppingCartContext"

export default function Header() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
      <div className="bg-amber-400">
          <div className="flex justify-between items-center p-6">
              <div><img className="h-40 w-auto" src="src/assets/Visionary-logos_transparent.png" alt="Visionary website logo" /></div>
              <h1 className="font-extrabold italic">Visionary: Frame Your Outlook</h1>
              <div>
                  <ul className="flex gap-8">
                      <li><img className="w-12 h-auto" src="src/assets/search.svg" alt="Search icon" /></li>
                      <li className="relative">
                        <img onClick={openCart} className="w-12 h-auto hover:cursor-pointer hover:scale-110" src="src/assets/cart.svg" alt="Shopping cart icon" />
                        {cartQuantity > 0 && (
                          <span className="flex justify-center items-center absolute -top-2 -right-2 h-2/3 w-2/3 rounded-full bg-blue-600 text-white text-xs">
                            {cartQuantity}
                          </span>
                        )}
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    )
}
