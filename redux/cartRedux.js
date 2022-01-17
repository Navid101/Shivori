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
            state.products.push({...action.payload.singleProduct[0],quantity:action.payload.count,size:action.payload.size});
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
            state.total -= action.payload.product.price*action.payload.product.quantity;
        },
        updateQuantity:(state,action)=>{
            state.products.filter((item)=>item.sku===action.payload.product.sku)[0].quantity=action.payload.count;
            state.total = state.products.reduce((prev,cur)=>prev+(cur.price*cur.quantity),0);
        }
        
    }
})

export const {addProduct, clearProducts,removeProduct,updateQuantity} = cartSlice.actions
export default cartSlice.reducer;