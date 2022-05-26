import React from 'react'
import './stockitemStyle.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/Cart/CartSlice';


const StockItem = ({ id, title, price, amount, isInCart, img }) => {
  const dispatch = useDispatch()
  return (
    <Grid item xs={6} sm={6} md={3}>
      <Card  className='stock__card' >
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="title"
        />
        <CardContent>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" className='stock__title'>
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button disabled={isInCart ? true : false} size="small" onClick={() => dispatch(addToCart(id))} >{isInCart ? 'item in cart' : 'Add to cart'}</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default StockItem