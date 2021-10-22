import React from 'react'
import styled from 'styled-components'
import Button from './Button'



const Container = styled.div`
    position: relative;
   width: 100%;
   display: grid;
   align-items: center;
   justify-items: flex-start;
   grid-template-columns: 3fr 2fr 2fr 2fr 1fr;
   padding: 10px 0;

   @media (max-width:768px){
       width: 60%;
       display: flex;
       align-items: flex-start;
       justify-content: center;
       flex-direction:column;
       row-gap: 5px;
       padding: 20px 0;
   }
`





const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;


`

const ImageContainer = styled.div`
    height: 95px;
    width: 80px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    column-gap: 1rem;

    @media (max-width:768px){
        flex-direction: column;
    }


`
const CrossButton = styled.button`
    padding: 5px;
    text-align: center;
    border:none;
    background-color: rgba(0,89,76,.3);

    &:hover{
        background-color: rgba(0,89,76,1);
        color: white;
        transition: all .3s ease;
    }

`






const ProductItem = ({name,value,price,image}) => {
    return (
        <Container>
            <ProductInfo>
                <ImageContainer>
                    <Image src={image}></Image>
                </ImageContainer>
                <Info>
                    <h4>{name}</h4>
                    <h4>{value}</h4>
                </Info>
            </ProductInfo>
            <h4>Price: {price}</h4>
            <Button></Button>
            <h4>Total: {price*3}</h4>
            <CrossButton>Remove</CrossButton>
        </Container>
    )
}

export default ProductItem
