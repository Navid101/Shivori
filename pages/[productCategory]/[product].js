import React from 'react'
import FilterSize from '../../components/product/FilterSize'
import styled from 'styled-components'
import { products } from '../../data'
import { useRouter } from 'next/router'


const Section = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    @media (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MainImage = styled.img`
    width: 400px;
    height: 560px;
    object-fit: cover;
`

const SmallImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
`

const SmallImage = styled.img`
    width: 125px;
    height: 200px;
    object-fit: cover;
`

const ProductInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    border: none;
    background-color: rgba(0,89,76,1);
    color: white;
    padding: .5rem;

`


const items = [
    {
        id:1,
        name:"Handloomed Saree",
        image:"/assets/webp/2.webp",
        category:"Saree",
        subcategory:"Silk",
        price:"200"
    },
    {
        id:2,
        name:"Pant",
        image: "/assets/webp/3.webp",
        category:"Saree",
        subcategory:"Silk",
        size:["S","M","L","XL"],
        price:"200"
    }
]



const product = () => {
    const router = useRouter();
    const {product} = router.query
    const singleProduct = products.filter(item=>item.sku===product)
    return (
        <Section>
            {singleProduct.map((item)=>{
                return(
                    <Container key={item.sku}>
                    <ImageContainer>
                        <MainImage src={item.image}></MainImage>
                        <SmallImageContainer>
                            <SmallImage src={item.image}></SmallImage>
                            <SmallImage src={item.image}></SmallImage>
                            <SmallImage src={item.image}></SmallImage>
                        </SmallImageContainer>
                    </ImageContainer>
                    <ProductInfoContainer>
                        <h3>{item.name}</h3>
                        <h3>TK {item.price}</h3>
                        {singleProduct.map((item)=>{
                            if(item.size){
                                return <FilterSize subCategories={item.size} key={item.sku}></FilterSize>
                            }
                        })}
                        <ButtonContainer>
                            <Button>ADD TO CART</Button>
                        </ButtonContainer>
                    </ProductInfoContainer>
                </Container>
                )
            })}
        </Section>
    )
}

export default product
