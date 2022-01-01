import React from 'react'
import styled from 'styled-components'
import Order from '../components/checkout/Order'


const Section = styled.section`
    min-height:77vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    column-gap:3rem;
    width:90%;
    margin:auto;
    margin-top:3rem;
    @media (max-width:768px){
        display:flex;
        flex-direction:column;
    }
`


const Container = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    width:100%;
`

const Border = styled.span`
    border:1px solid black;
    width:60%;
    margin-top:5px;
`

const Form = styled.form`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    width:100%;
    row-gap:1rem;
    margin-top:1rem;
`
const Label = styled.label`
    font-size:26px;
`
const Input = styled.input`
    width:60%;
    height:30px;
    background-color:#eeeeee;
    border:none;
`
const Button = styled.button`
    width:100%;
    border:none;
    background-color:#eeeeee;
    height:30px;
    margin-top:2rem;
    transition: all 0.3s ease-in;

    &:hover{
        background-color:#003F36;
        color:white;
    }
`

const checkout = () => {
    return (
        <Section>
        <Wrapper>
            <Container>
            <h3>Billing Details</h3>
            <Border></Border>
            <Form>
                <Label htmlFor="">Name</Label>
                <Input type="text" placeholder='Enter Name'/>
                <Label htmlFor="">Address</Label>
                <Input type="text" autoFocus placeholder='Enter Address'/>
                <Label htmlFor="">Phone</Label>
                <Input type="text" placeholder='Enter Phone Number'/>
                <Label htmlFor="">Email</Label>
                <Input type="text" placeholder='Enter Email'/>
            </Form>
            </Container>
            <Container>
            <h3>Your Order</h3>
            <Border style={{width:'100%'}}></Border>
            <Order></Order>
            <Button>Place Order</Button>
            </Container>
        </Wrapper>
        </Section>
    )
}

export default checkout
