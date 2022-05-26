import React from 'react'
import StockItem from './stockitem/StockItem'
// import { Stocks } from '../../products/Products'
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

const StockContainer = () => {
    const { Stocks } = useSelector((state) => state.cart)
   
    return (
        <Grid container spacing={2} className='container'>
                { Stocks.map((stock) => (
                    <StockItem key={stock.id}  {...stock} />
                ))}
        </Grid>
    )
}

export default StockContainer