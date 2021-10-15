import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    padding: 3rem 0;
    width: 90%;
    text-align: center;
`

const refund = () => {
    return (
        <Section>
        <Container>
            <h1>Return Policy</h1>
            <br></br>
            <h3>If Product Color/Design As Shown In Our Picture, Inform Us As Soon As You Get The Product With Picture. We Will Exchange The Product. If We Can Not We Will Return The Money</h3>
            <br></br>
            <h3>If There Is Any Kind Of Defect In The Product , You Will Have To Inform Us With In 24 Hours With Pictures.We Will Resend The Product. If We Can Not, We Return The Money.</h3>
            <br></br>
            <h3>Note- Product Color Can Seem Slightly Different Due To Different Devices.</h3>
        </Container>
        </Section>
    )
}

export default refund
