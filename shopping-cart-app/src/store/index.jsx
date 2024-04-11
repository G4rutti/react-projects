import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice.jsx"


const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store