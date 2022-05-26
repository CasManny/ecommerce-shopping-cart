import React from 'react'
import { CartIcon } from '../icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
const { amount } = useSelector((state) => state.cart)
  return (
    <nav>
      <div className='nav-center'>
        <Link to='/'>
          <h3>Casmanny Store</h3>
        </Link>
        <div className='nav-container'>
          <Link to='/cart'>
            <CartIcon />
          </Link>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar