import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import {slides} from '../../data'




const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Image =  styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const BootCarousel = () => {
    return (
            <Carousel fade indicators={false} interval={1200}>
            {slides.map((slide)=>{
                return(
                    <Carousel.Item key={slide.id}>
                        <ImageContainer><Image src={slide.image}></Image></ImageContainer>
                    </Carousel.Item>
                )
            })}
            </Carousel>
    )
}

export default BootCarousel
