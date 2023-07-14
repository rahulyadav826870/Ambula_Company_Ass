import React, { useContext, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { addProducttoCart, quantityDec, quantityInc, remove } from '../store/cartSlice'
import './Shopping.css'
import Quantity from './Quantity'
import { contextApi } from '../Context/UseContext'

const Cart = () => {
  //   const dispatch = useDispatch()
  const { cartProducts, removeFromCart } = useContext(contextApi)

  // console.log("cart",Products)
  return (
    <div>
      <div className="cartWrapper">
        <h3>
          Cart Total Price : Rs.{' '}
          {cartProducts
            .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            .toFixed(2)}
        </h3>
        {cartProducts?.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <Quantity id={item.id} quantity={item.quantity} />
            <h5>Rs. {item.price}</h5>
            <button onClick={() => removeFromCart(item.id)} className="remove">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
