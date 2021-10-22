import React, {useState} from 'react'
import styled from 'styled-components'
import ProductItem from '../components/cart/ProductItem'
import { products } from '../data'

const Section = styled.div`
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 3rem;
    margin: auto;


`

const ProductContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
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

const dumdum = [1,2]

const dummyProduct = {
    name:"Handmade Saree",
    price:200,
    value:"M",
    image:"https://images.unsplash.com/photo-1615886753866-79396abc446e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
}

const dummyProduct2 = {
    name:"Georget Saree",
    price:200,
    value:"M",
    image:"https://images.unsplash.com/photo-1615886753866-79396abc446e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
}



const cart = () => {
    const [subTotal,setSubTotal] = useState(3450)
    return (
        <Section>
            <h1>Your Shopping Cart</h1>
            <ProductContainer>
                {dumdum.map((dum)=>{
                    return (
                    <ProductItem name={dummyProduct.name} value={dummyProduct.value} price={dummyProduct.price} image={dummyProduct.image}></ProductItem>
                    )
                })}
            </ProductContainer>
            <CartTotal>
                <h4>Subtotal: {subTotal}</h4>
                <ButtonGroup>
                    <Button>Empty Cart</Button>
                    <Button>Checkout</Button>
                </ButtonGroup>
            </CartTotal>

        </Section>
    )
}

export default cart
