import React,{useRef, useState} from 'react'
import FilterSize from '../../components/product/FilterSize'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
import CartButton from "./../../components/cart/Button"
import useMouse from '@react-hook/mouse-position'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';



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
        gap: 0;
    }
    
`


const MainImage = styled.div`
    width: 600px;
    height:auto;
    @media (max-width:768px){
        height: auto;
        width: 100%;
    }
    overflow:hidden;
         
`

const SmallImageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: flex-start;
    row-gap:1rem;
    @media (max-width:768px){
        flex-direction:row;
        justify-content: space-between;
        column-gap:1rem;
        width: 100%;
        
    } 
`

const SmallImage = styled.div`
    width: 125px;
    height: 200px;
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
        padding-top:2rem;
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
    transition:all 0.3s ease-in;

`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:contain;
    
`
const MImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit:contain;
    transition: all 0.4s;
    &:hover{
        transform: scale(2);
        transform-origin:${props=>props.x+'px'} ${props=>props.y+'px'} ;
    }
`

export const getStaticPaths = async ()=>{
    const res = await fetch("https://shivoriadmin.vercel.app/api/products")
    const {data} = await res.json()
    const paths = data.map((path=>({params:{productCategory:path.category.toLowerCase(),product:path.sku}})))
    return{
        paths,
        fallback:'blocking'
    }

}


export async function getStaticProps() {
    const res = await fetch("https://shivoriadmin.vercel.app/api/products")
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {products:data.data},
      revalidate:1 // will be passed to the page component as props
    }
  }

const product = ({products}) => {
    

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
      })
    const dispatch = useDispatch();
    const [count,setCount] = useState(1);
    const [add,setAdd] = useState(false);

    const router = useRouter();
    const {product} = router.query

    const singleProduct = products.filter(item=>item.sku===product)

    const [image,setImage] = useState(singleProduct[0].image1);
    const handleClick = ()=>{
        setAdd(true)
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
                    <SmallImageContainer>
                            <SmallImage><Image src={item.image1} onClick={()=>setImage(item.image1)} ></Image></SmallImage>
                            <SmallImage><Image src={item.image2} onClick={()=>setImage(item.image2)} ></Image></SmallImage>
                            <SmallImage><Image src={item.image3} onClick={()=>setImage(item.image3)} ></Image></SmallImage>              
                    </SmallImageContainer>
                    {/* <MainImage ref={ref}>
                            <MImage src={image} x={mouse.x} y={mouse.y}></MImage>
                    </MainImage> */}
                    <MainImage >
                        <InnerImageZoom src={image} zoomType='hover' zoomScale={0.7}/>
                    </MainImage>
                        
                    <ProductInfoContainer>
                        <h3>{item.name}</h3>
                        <h3>MRP: TK {item.price}</h3>
                        <h3>SKU: {item.sku}</h3>
                        <h3>Fabric: {item.subCategory}</h3>
                        <h4>{item.desc}</h4>
                        {singleProduct.map((item)=>{
                            if(item.size){
                                return <FilterSize sizes={item.size} key={item.sku}></FilterSize>
                            }
                        })}
                        <ButtonContainer>
                            {/* <CartButton count={count} setCount={setCount}></CartButton> */}
                            {!add? <Button onClick={handleClick}>ADD TO CART</Button>: <Button style={{opacity:0.8}}>ADDED TO CART</Button>}
                        </ButtonContainer>
                    </ProductInfoContainer>
                </Container>
                )
            })}
        </Section>
    )
}

export default product
