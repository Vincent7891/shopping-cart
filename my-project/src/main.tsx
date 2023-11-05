import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import Carousel from './Carrousel'
import HomePageContent from './HomePageContent'
import Navbar from './Navbar'
import Shop from './pages/Shop'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import your images
const img1 = 'src/assets/sunglasses1.jpg';
const img2 = 'src/assets/sunglasses2.jpg';
const img3 = 'src/assets/sunglasses3.jpg';

const slides = [img1, img2, img3]; // Define your slides array

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/home" element={
          <div className="w-full h-[1000px] mx-auto">
            <Carousel slides={slides}/>
            <HomePageContent/>
          </div>
        }/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);