import { Facebook, Instagram,MailOutline} from '@material-ui/icons'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    margin-top: 3rem;
    width: 100%;
    height: 7rem;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2,1fr);

    @media (max-width:768px){
        grid-template-columns: 1fr;
        justify-items: center;
        row-gap: 1rem;
  
    }
`

const Left = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    color: white;
    @media (max-width:768px){
        align-items:center;
  
    }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
    gap: 2rem;
`

const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition:all 0.3s ease-in;
    &:hover{
        color: #bdbdbd;
    }
`

const Footer = () => {

    const sendMail = ()=>{
        window.location = "mailto:shivoriclothing@gmail.com";
    }

    return (
        <Section>
            <Container>
                <Left>
                    <Link href="/about"><FooterLink>About Us</FooterLink></Link>
                    <Link href="/refund"><FooterLink>Refund And Return Policy</FooterLink></Link>
                </Left>
                <Right>
                    <FooterLink href="https://www.facebook.com/shivorisaree" target="blank"><Facebook></Facebook></FooterLink>
                    <FooterLink href="https://www.instagram.com/shivori/" target="blank"><Instagram></Instagram></FooterLink>
                    <FooterLink onClick={sendMail}><MailOutline></MailOutline></FooterLink>
                </Right>
            </Container>
        </Section>
    )
}

export default Footer
