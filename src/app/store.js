import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/Cart/CartSlice'
import modalReducer from '../features/Modal/Modalslice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})