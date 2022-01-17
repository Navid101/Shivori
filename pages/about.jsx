import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:73vh;
`

const Container = styled.div`
    padding: 3rem 0;
    width: 90%;
    text-align: center;
`

const About = () => {
    return (
        <Section>
            <Container>
            <h1>Welcome to Shivori!</h1>
            <br></br>
            <h3>We believe we’re born beautiful, we don’t need to do anything externally. But we can express ourselves more with our fashion and style sense . With this belief, we started our journey in September, 2019.

We make handloom products mostly, we take enough time to curate every single piece to maintain the beauty and quality. We believe in quality and we believe in YOU !

We try heartily to give you quality products. Hope your journey with us is gonna be a fantastic one. You and we together, can create some good memories.</h3>
            <br></br>
            <h3>Take Love!</h3>
            <br></br>
            <h1>Shivori Team</h1>
            </Container>
        </Section>
    )
}

export default About
