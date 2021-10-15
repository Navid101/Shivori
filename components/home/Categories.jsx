import React from 'react'
import styled from 'styled-components'
import { categories } from '../../data'

const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
`

const Container = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 20rem;
    row-gap: 3rem;

    @media (max-width:768px){
        grid-template-columns: 1fr;
    }
`

const ImageContainer = styled.div`
    width: 250px;
    height: 250px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Categories = () => {
    return (
        <Section>
            <h1>Categories</h1>
            <Container>
                {categories.map((category)=>{
                    return(
                        <a href="http://youtube.com" key={category.id}>
                            <ImageContainer>
                                <Image  src={category.image}>
                                </Image>
                            </ImageContainer>
                        </a>

                    )
                })}
            </Container>

        </Section>
    )
}

export default Categories
