import React from 'react'
import { ChevronDown, ChevronUp } from '../../icons'
import { increaseItem, decreaseItem, removeItem } from '../../features/Cart/CartSlice'
import { useDispatch } from 'react-redux'

const Cartitem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increaseItem(id))}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => {
          dispatch(decreaseItem(id))
          if(amount <= 1) {
            dispatch(removeItem(id))
          }
        }} >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default Cartitem