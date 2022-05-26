import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import Cartpage from './pages/Cartpage'
import Homepage from './pages/Homepage'
import { calculateTotals } from './features/Cart/CartSlice'
import Allstockspage from './pages/Allstockspage'


const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <>
      <Container maxWidth="lg">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/stocks' element={<Allstockspage />} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App