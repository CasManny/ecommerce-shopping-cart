import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem'
import { openModal } from '../../features/Modal/Modalslice'

const Cartcontainer = () => {
  const { cartItems, amount, total} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <Cartitem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <div className='cart__action-btns'>

        <button className='btn clear-btn' onClick={() => dispatch(openModal())} >clear cart</button>
        <button className='btn check-out-btn'>proceed to checkout</button>
        </div>
      </footer>
    </section>
  )
}

export default Cartcontainer