import { createSlice } from '@reduxjs/toolkit'
import { Stocks } from '../../products/Products'
const initialState = {
    Stocks,
    cartItems: [],
    total: 0,
    amount: 0,
}

const newStocks= Stocks.forEach((item) => item)
console.log(newStocks);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions )=> {
            const itemId = actions.payload 
            const item = state.Stocks.find((item) => item.id === itemId)
            item.amount += 1
            item.isInCart = true
            state.cartItems = [...state.cartItems, item]
        }, 
        increaseItem: (state, {payload}) => {
            const itemId = payload
            const item = state.cartItems.find((item) => item.id === itemId)
            item.amount += 1
        }, 
        decreaseItem: (state, {payload}) => {
            const itemId = payload
            const item = state.cartItems.find((item) => item.id === itemId)
            item.amount -= 1

        }, 
        removeItem: (state, { payload }) => {
            const itemId = payload
            const item = state.cartItems.find((item) => item.id === itemId)
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
           const stock = state.Stocks.find((item) => item.id === itemId)
           stock.isInCart = false
           stock.amount = 0


        }, 
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        },
        clearCart: (state) => {
            state.cartItems = []
            state.Stocks.forEach((item) => {
                if(item.isInCart === true && item.amount > 0) {
                    item.isInCart = false
                    item.amount = 0
                }
            })
        }

    }
})


export const { clearCart, addToCart, increaseItem, decreaseItem, removeItem, calculateTotals } = cartSlice.actions


export default cartSlice.reducer