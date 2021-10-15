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
            <Text >{name}</Text>
            <Text >{`TK ${price}`}</Text>
        </Container>
    )
}

export default Card
