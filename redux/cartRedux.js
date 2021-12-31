import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push({...action.payload.singleProduct[0],quantity:action.payload.count});
            state.total += action.payload.singleProduct[0].price * action.payload.count;
        },
        clearProducts:(state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }, 
        removeProduct:(state,action)=>{
            state.products = state.products.filter((item)=>item.sku!==action.payload.product.sku);
            state.quantity -=1;
        }
    }
})

export const {addProduct, clearProducts,removeProduct} = cartSlice.actions
export default cartSlice.reducer;