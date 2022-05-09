import React,{useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Container = styled.div`
    width:100%;
    /* height:600px; */
    background-color:red;
    margin-top:.5rem;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`




const Banner = ({banners}) => {

    return (
        <Section>
            {banners.map((banner,index)=>{
                return(
                    <Container key={index}>
                        <Image src={banner.image}></Image>
                    </Container>
                )
            })}
        </Section>
    )
}

export default Banner
