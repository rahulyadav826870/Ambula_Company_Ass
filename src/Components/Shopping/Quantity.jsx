import React, { useContext } from 'react'
import { contextApi } from '../Context/UseContext'


const Quantity = ({ id, quantity }) => {
  const { incQuantity, decQuantity } = useContext(contextApi)

  return (
    <span className="quantityBtn">
      <button className="quantity" onClick={() => decQuantity(id)}>
        -
      </button>
      <h4>{quantity}</h4>
      <button className="quantity" onClick={() => incQuantity(id)}>
        +
      </button>
    </span>
  )
}

export default Quantity
