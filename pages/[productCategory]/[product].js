import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    @media (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MainImage = styled.img`
    width: 400px;
    height: 560px;
    object-fit: cover;
`

const SmallImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
`

const SmallImage = styled.img`
    width: 125px;
    height: 200px;
    object-fit: cover;
`

const ProductInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    border: none;
    background-color: rgba(0,89,76,1);
    color: white;
    padding: .5rem;

`

const product = () => {
    return (
        <Section>
            <Container>
                <ImageContainer>
                    <MainImage src="/assets/webp/2.webp"></MainImage>
                    <SmallImageContainer>
                        <SmallImage src="/assets/webp/2.webp"></SmallImage>
                        <SmallImage src="/assets/webp/2.webp"></SmallImage>
                        <SmallImage src="/assets/webp/2.webp"></SmallImage>
                    </SmallImageContainer>
                </ImageContainer>
                <ProductInfoContainer>
                    <h3>Handloomed Saree</h3>
                    <h3>TK 200</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <ButtonContainer>
                        <Button>ADD TO CART</Button>
                    </ButtonContainer>
                </ProductInfoContainer>
            </Container>
        </Section>
    )
}

export default product
