import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { current } from '@reduxjs/toolkit';

let initialState={
    items : localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[],
    cartvisible : false,
}

const AddtoCart = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem("data",JSON.stringify(state.items))
        },

        removeItems:(state,action)=>{
            let match = state.items.filter(item => item.id !== action.payload)
            state.items = match
            localStorage.setItem("data",JSON.stringify(match));
        },

        clearAll:(state)=>{
            console.log("claer Call")
        },

        carton:(state)=>{
          state.cartvisible = true;
        },

        cartof:(state)=>{
          state.cartvisible = false;
        },

        addQuantity: (state, action) => {
         let data = localStorage.getItem("data")
           ? JSON.parse(localStorage.getItem("data"))
           : [];

         const itemIndex = data.findIndex(item => item.id === action.payload.id);

         if (itemIndex !== -1) {
          data[itemIndex].quantity?
          data[itemIndex].quantity = data[itemIndex].quantity+1:
          data[itemIndex].quantity = 2 ;
        } else {
          data.push({ ...action.payload, quantity: 2 });
        }
        state.items = data;
        localStorage.setItem("data", JSON.stringify(data));
      },

      subtractQuantity:(state,action)=>{
        let data = localStorage.getItem("data")
           ? JSON.parse(localStorage.getItem("data"))
           : [];

        const itemIndex = data.findIndex(item => item.id === action.payload.id);
        if (itemIndex !== -1) {
          data[itemIndex].quantity?
          data[itemIndex].quantity = data[itemIndex].quantity-1:
          data[itemIndex].quantity = 0;

        } else {
          data.push({ ...action.payload, quantity: 1 });
        }
        state.items = data;
        localStorage.setItem("data", JSON.stringify(data));
      },
    
    }
})

export const {addItems,removeItems,clearAll, cartof, carton, addQuantity, subtractQuantity,totalPrice} = AddtoCart.actions;
export default AddtoCart.reducer;
