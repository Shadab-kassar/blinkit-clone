import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from './slice'

const store = configureStore({
    reducer:{
        cart: addToCartReducer,
    }
})

export default store;