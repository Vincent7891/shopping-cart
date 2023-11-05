import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <div className="bg-slate-900 sticky top-0 z-20">
        <ul className="flex justify-center gap-8 text-white p-4">
          <li className="relative cursor-pointer group">
          <Link to="/home" className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">home</Link>

            <span className="absolute h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full left-0 bottom-0"></span>
          </li>
          <li className="relative cursor-pointer group">
            <Link to="/shop" className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">Our collection</Link>
            <span className="absolute h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full left-0 bottom-0"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              About us
            </span>
            <span className="absolute h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full left-0 bottom-0"></span>
          </li>
          <li className="relative cursor-pointer group">
            <span className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              Create an Account
            </span>
            <span className="absolute h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full left-0 bottom-0"></span>
          </li>
        </ul>
      </div>
    );
  }
  
  
