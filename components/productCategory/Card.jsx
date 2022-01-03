import React from 'react'
import styled from 'styled-components'
import Image from 'next/dist/client/image'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const ImageContainer = styled.div`
    height: 360px;
    width: 285px;
    position:relative;
    cursor:pointer;
    @media (max-width:768px){
        height: auto;
        width: auto;
    }
`


const Text = styled.h4`
    color: black;
    font-size: 16px;

`



const Card = ({image, name, price}) => {
    return (
        <Container >
            <ImageContainer>
                <Image src={image} layout='fill' objectFit='cover'/>
            </ImageContainer>
            <Text>{name}</Text>
            <Text>{`TK ${price}`}</Text>
        </Container>
    )
}

export default Card
