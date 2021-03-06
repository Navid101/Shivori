import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import ProductItem from '../components/cart/ProductItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearProducts } from '../redux/cartRedux'
import Link from 'next/dist/client/link'


const Section = styled.div`
    padding: 7.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 3rem;
    margin: auto;
    min-height:77vh;

`

const ProductContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    padding-bottom: 1rem;
`
const CartTotal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid black;
    padding-top: 10px;

    @media(max-width:768px){
        align-items: center;
    }
`

const ButtonGroup = styled.div`
    padding-top: 1rem;
    display: flex;
    column-gap: 20px;
`

const Button = styled.button`
    padding: 5px;
    border: none;
    background-color: rgba(0,89,76,.3);

    &:hover{
        background-color: rgba(0,89,76,1);
        color: white;
        transition: all .3s ease;
    }
    
`






const cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
    const total = useSelector(state=>state.cart.total)
    const products = useSelector(state => state.cart.products);
    const handleClear = ()=>{
        dispatch(clearProducts())
    }
    console.log(cart);
    if(total){
        return (
            <Section>
                <h1>Your Shopping Cart</h1>
                <ProductContainer>
                    {products.map((product,index)=>{
                        return (
                        <ProductItem key={index} product={product}></ProductItem>
                        )
                    })}
                </ProductContainer>
                <CartTotal>
                    <h4>Subtotal: {total}</h4>
                    <ButtonGroup>
                        <Button onClick={handleClear}>Empty Cart</Button>
                        <Link href="/checkout">
                        <Button>Checkout</Button>
                        </Link>
                    </ButtonGroup>
                </CartTotal>
    
            </Section>
        )
    }else{
        return(
            <Section>
                <h1>Your shopping cart is empty!</h1>
                <h1>Add some items maybe?</h1>
            </Section>
            
        )
    }
}

export default cart
