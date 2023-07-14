import React from 'react'
// import ShoppingNavbar from './Components/Shopping/ShoppingNavbar'
import { Route, Routes } from 'react-router-dom'
// import Products from '../Components/Shopping/Products'
// import Cart from './Components/Cart'
import ShoppingNavbar from '../Shopping/ShoppingNavbar'
import Products from '../Shopping/Products'
import Cart from '../Shopping/Cart'

const Shoping = () => {
  return (
    <div>
      <ShoppingNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Shoping
