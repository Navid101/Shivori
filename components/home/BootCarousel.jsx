import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import styled from 'styled-components'





const ImageContainer = styled.div`
    height: 94vh;
    width: auto;
    @media (max-width:768px){
        height:100%;
        width:100%;
    }
`

const Image =  styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const BootCarousel = ({slides}) => {
    return (
            <Carousel fade indicators={false} interval={1200}>
            {slides.map((slide)=>{
                return(
                    <Carousel.Item key={slide._id}>
                        <ImageContainer><Image src={slide.image}></Image></ImageContainer>
                    </Carousel.Item>
                )
            })}
            </Carousel>
    )
}

export default BootCarousel
