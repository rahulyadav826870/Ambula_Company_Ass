import React, { useContext } from 'react'
// import {  } from '../../CartContext'
import Navbar from './ShoppingNavbar'
import Quantity from './Quantity'
import { contextApi } from '../Context/UseContext'

const Products = () => {
  // import addtoCart function and productsData using contextAPI from CartContext
  const { addToCartHandler, productsData, cartProducts } = useContext(
    contextApi
  )

  return (
    /* conatiner for all products cards */
    <div className="Cards">
      {productsData?.map(({ id, title, price, image }) => {
        return (
          <div className="card" key={id}>
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="priceAndButton">
              <h4>Price : ₹ {price}</h4>
              {cartProducts.findIndex((item) => item.id === id) > -1 ? (
                <Quantity
                  id={id}
                  quantity={
                    cartProducts.find((item) => item.id === id).quantity || 1
                  }
                />
              ) : (
                <button
                  className="addProduct"
                  onClick={() => addToCartHandler({ id, title, price, image })}
                >
                  {' '}
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
