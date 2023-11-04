import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import Carousel from './Carrousel'
// Import your images
const img1 = 'src/assets/sunglasses1.jpg';
const img2 = 'src/assets/sunglasses2.jpg';
const img3 = 'src/assets/sunglasses3.jpg';

type slides = string[]
const slides = [img1, img2, img3]; // Define your slides array


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <div className ="w-full h-[1000px] mx-auto">
      <Carousel slides={slides}/>
    </div>
  </React.StrictMode>,
)
