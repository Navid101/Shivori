import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import ProductItem from '../components/cart/ProductItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearProducts, removeProduct } from '../redux/cartRedux'


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
    const products = useSelector(state => state.cart.products);
    const total = useSelector(state => state.cart.total)
    const [subTotal,setSubTotal] = useState([]);
    const handleClear = ()=>{
        dispatch(clearProducts())
    }
    const getTotal = (param)=>{
        setSubTotal([...subTotal,param]);
    }
    console.log(products);
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
                    <Button>Checkout</Button>
                </ButtonGroup>
            </CartTotal>

        </Section>
    )
}

export default cart
