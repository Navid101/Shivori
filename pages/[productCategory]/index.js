import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { products } from '../../data'
import Card from '../../components/productCategory/Card'
import Pagination from '../../components/productCategory/Pagination'
import Filter from '../../components/productCategory/Filter'
import Error404 from '../../components/Error404'
import Link from 'next/link'

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

const ProductCategory = () => {
    const router = useRouter();
    const {productCategory} = router.query;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    //Get Current Producsts
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

    //Get All the categories
    const categories = [...new Set(products.map(product=>product.category.toLowerCase()))];
    const subCategories =  [...new Set(products.map(product=>product.subCategory))];

    if(!(categories.includes(`${productCategory}`.toLowerCase()))){
        return <Error404></Error404>
    }
    
    console.log(filteredProducts)

    return (

        <Section>
            <h1>{`${productCategory}`.toUpperCase()}</h1>
            <Filter subCategories={subCategories}></Filter>
            <Container>
                {filteredProducts.map((product,index)=>{
                    return(
                        <Link href={`/${productCategory}/${product.sku}`} passHref key={index}>
                        <A>
                        <Card key={index} image={product.image} price={product.price} name={product.name}></Card>
                        </A>
                        </Link>
                    )
                })}
            </Container>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}></Pagination>
        </Section>
    )
}

export default ProductCategory
