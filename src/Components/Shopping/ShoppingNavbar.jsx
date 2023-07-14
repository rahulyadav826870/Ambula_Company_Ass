import React, { useContext } from 'react'
import './Shopping.css'

import { Link } from 'react-router-dom'
import { contextApi } from '../Context/UseContext'

const ShoppingNavbar = () => {
  const { cartProducts } = useContext(contextApi)

  return (
    <nav className="navbar">
      <Link to="/">
        <h3>Store</h3>
      </Link>
      <Link to="/cart" className="cart">
        <h3>Cart</h3> <span className="cartValue">{cartProducts.length}</span>
      </Link>
    </nav>
  )
}

export default ShoppingNavbar
