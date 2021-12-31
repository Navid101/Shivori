import React from 'react'
import styled from 'styled-components'
import { newIns } from '../../data'
import Link from 'next/link'

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
    margin-top: 2rem;

    @media (max-width:768px){
        grid-template-columns: 1fr;
    }
`

const ImageContainer =  styled.div`
    width: 100%;
    height: auto;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Overlay =  styled.div`
    position: absolute;
    width: 100%;
    top: 40%;
    align-content: center;
    text-align: center;
    background-color: rgba(0,89,76,.3);
    color: white;
    font-weight: 400;
    padding: 10px;
`

const H1 = styled.h1`
    padding: 5rem 0;
`

const NewIn = () => {
    return (
        <Section>
            <H1>New In</H1>
            <Container>
                {newIns.map((newIn)=>{
                    return(
                        <Link href={`/${newIn.name.toLowerCase()}`} key={newIn.id}>
                        <ImageContainer key={newIn.id} style={{cursor:"pointer"}}>
                            <Image src={newIn.image}></Image>
                            {/* <Overlay><h3>{newIn.name}</h3></Overlay> */}
                        </ImageContainer>
                        </Link>
                    )
                })}
            </Container>            
        </Section>
    )
}

export default NewIn
