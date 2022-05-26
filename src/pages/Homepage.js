import { Container } from '@mui/material'
import React from 'react'
import { Contact, Footer, Heropage, NewsLetter, StockContainer } from '../components'
const Homepage = () => {

  
  return (
    <Container maxWidth="lg">
        <Heropage />
        <StockContainer />
        <Contact />
        <NewsLetter />
        <Footer />
      </Container>
  )
}

export default Homepage