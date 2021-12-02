import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const ImageContainer = styled.div`
    height: 360px;
    width: 285px;
    @media (max-width:768px){
        height: auto;
        width: auto;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Text = styled.h5`
    font-weight: 600;

`

const Card = ({image, name, price}) => {
    return (
        <Container >
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <a>{name}</a>
            <a>{`TK ${price}`}</a>
        </Container>
    )
}

export default Card
