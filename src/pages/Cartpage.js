import React from 'react'
import { useSelector } from 'react-redux'
import Cartcontainer from '../components/Cart/Cartcontainer'
import Modal from '../components/Modal/Modal'


const Cartpage = () => {
  const { isOpen } = useSelector(state => state.modal)
  return (
    <div>
      <Cartcontainer />
      {
        isOpen && <Modal />
      }
    </div>
  )
}

export default Cartpage