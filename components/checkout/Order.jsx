import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    width:100%;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    row-gap:1rem;
    margin-top:1rem;
`

const Item = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Border = styled.span`
    border:1px solid black;
    width:100%;
    margin-top:5px;
`

const Image = styled.img`
    height:100px;
    width:80px;
    object-fit:contain;
    padding-left:0;
`
const Order = () => {
    const products = useSelector(state => state.cart.products)
    const total = useSelector(state=>state.cart.total)
    return (
        <Container>
            {products.map((product,index)=>{
                return (
                <Item key={index}>
                    <Image src={product.image1}></Image>
                    <h3 style={{maxWidth:'170px'}}>{product.name}</h3>
                    {product.size?<h3 style={{maxWidth:'170px'}}>{product.size}</h3>:""}
                    <h3>x{product.quantity}</h3>
                    <h3>{product.quantity*product.price}</h3>
                </Item>
                )
            })}
            <Border></Border>
            <Item>
                <h3>Total</h3>
                <h3>{total}</h3>
            </Item>
        </Container>
    )
}

export default Order
