import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    row-gap: 1rem;
`

const ImageContainer = styled.div`
    height: 360px;
    width: 285px;
    position:relative;
    cursor:pointer;
    @media (max-width:768px){
        height: auto;
        width: 100%;
    }
`
const Image = styled.img`
    height:100%;
    width:100%;
    object-fit:contain;
`

const Text = styled.h4`
    color: black;
    font-size: 16px;

`



const Card = ({image, name, price}) => {
    return (
        <Container >
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <Text>{name}</Text>
            <Text>{`TK ${price}`}</Text>
        </Container>
    )
}

export default Card
