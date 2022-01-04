import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
// import { products } from '../../data'
import Card from '../../components/productCategory/Card'
import Pagination from '../../components/productCategory/Pagination'
import Filter from '../../components/productCategory/Filter'
import Error404 from '../../components/Error404'
import Link from 'next/link'
import axios from 'axios'

const Section = styled.div`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const A = styled.a`
    text-decoration: none;
    color: black;

    &:hover{
        color: black;
    }
`

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: space-between;
    padding-top: 2rem;

    @media (max-width:768px){
        display: grid;
        gap: 1.5rem;
        row-gap: 3rem;
        grid-template-columns: repeat(2,1fr);
    }
`

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
      revalidate:60 // will be passed to the page component as props
    }
  }

const ProductCategory = ({products}) => {
    const [value,setValue] = useState("All")
    const router = useRouter();
    const {productCategory} = router.query;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    console.log(products)

    
    //Get Current Products
    const indexOFLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOFLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOFLastProduct);   
    const filteredProducts = currentProducts.filter((item=>item.category.toLowerCase()===productCategory))



    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    useEffect(()=>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    },[currentPage])

    useEffect(()=>{
        setValue("All")
    },[productCategory])



    //Get All the categories
    const categories = [...new Set(products.map(product=>product.category.toLowerCase()))];
    const subCategories =  [...new Set(filteredProducts.map(product=>product.subCategory))];

    if(!(categories.includes(`${productCategory}`.toLowerCase()))){
        return <Error404></Error404>
    }




    if(!(value==="All")){
        return(
            <Section>
                <h1>{`${productCategory}`.toUpperCase()}</h1>   
                <Filter subCategories={subCategories} setValue={setValue}></Filter>
                <Container>
                    {(filteredProducts.filter(item=>item.subCategory===value)).map((product,index)=>{
                        return(
                            <Link href={`/${productCategory}/${product.sku}`} passHref key={index}>
                            <A>
                            <Card key={index} image={product.image1} price={product.price} name={product.name}></Card>
                            </A>
                            </Link>
                        )
                    })}
                </Container>
            </Section>
        )
    }else{
        return (
        
            <Section>
                <h1>{`${productCategory}`.toUpperCase()}</h1>                
                <Filter subCategories={subCategories} setValue={setValue}></Filter>
                <Container>
                    {filteredProducts.map((product,index)=>{
                        return(
                            <Link href={`/${productCategory}/${product.sku}`} passHref key={index}>
                            <A>
                            <Card key={index} image={product.image1} price={product.price} name={product.name}></Card>
                            </A>
                            </Link>
                        )
                    })}
                       
                </Container>
                <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}></Pagination>
            </Section>
        ) 
    }

}

export default ProductCategory

