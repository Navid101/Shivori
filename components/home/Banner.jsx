import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Container = styled.div`
    width:90%;
    /* height:600px; */
    background-color:red;
    margin-top:.5rem;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

const Banner = () => {
    return (
        <Section>
        <Container>
            <Image src='https://images.unsplash.com/photo-1616756351484-798f37bdffa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'></Image>
        </Container>
        <Container>   
            <Image src='https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'></Image>
        </Container>
        </Section>
    )
}

export default Banner
