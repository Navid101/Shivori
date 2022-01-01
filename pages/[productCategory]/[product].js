import React,{useState} from 'react'
import FilterSize from '../../components/product/FilterSize'
import styled from 'styled-components'
import { products } from '../../data'
import { useRouter } from 'next/router'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
import CartButton from "./../../components/cart/Button"


const Section = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    position: relative;
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
    cursor:pointer;

`

const ProductInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.5rem;

    @media (max-width:768px){
        width: 100%;
        align-items: flex-start;
    }

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap:1rem;
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

export async function getServerSideProps() {
    const res = await fetch("https://shivoriadmin.vercel.app/api/products")
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {products:data.data}, // will be passed to the page component as props
    }
  }

const product = ({products}) => {

    const dispatch = useDispatch();
    const [count,setCount] = useState(1);
    

    const router = useRouter();
    const {product} = router.query
    console.log(product)
    const singleProduct = products.filter(item=>item.sku===product)
    console.log(singleProduct)
    const [image,setImage] = useState(singleProduct[0].image1);
    const handleClick = ()=>{
        dispatch(addProduct({singleProduct,count}));
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }
    return (
        <Section>
            {singleProduct.map((item)=>{
                return(
                    <Container key={item.sku}>
                    <ImageContainer>
                        <MainImage src={image}></MainImage>
                        <SmallImageContainer>
                            <SmallImage src={item.image1} onClick={()=>setImage(item.image1)}></SmallImage>
                            <SmallImage src={item.image2} onClick={()=>setImage(item.image2)}></SmallImage>
                            <SmallImage src={item.image3} onClick={()=>setImage(item.image3)}></SmallImage> 
                        </SmallImageContainer>
                    </ImageContainer>
                    <ProductInfoContainer>
                        <h3>{item.name}</h3>
                        <h3>TK {item.price}</h3>
                        <h3>Fabric: {item.subCategory}</h3>
                        {singleProduct.map((item)=>{
                            if(item.size){
                                return <FilterSize sizes={item.size} key={item.sku}></FilterSize>
                            }
                        })}
                        <ButtonContainer>
                            <CartButton count={count} setCount={setCount}></CartButton>
                            <Button onClick={handleClick}>ADD TO CART</Button>
                        </ButtonContainer>
                    </ProductInfoContainer>
                </Container>
                )
            })}
        </Section>
    )
}

export default product
