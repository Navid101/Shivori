import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { products } from '../../data'
import Card from '../../components/productCategory/Card'
import Pagination from '../../components/productCategory/Pagination'
import Filter from '../../components/productCategory/Filter'
import Error404 from '../../components/Error404'

const Section = styled.div`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1.5rem;
    row-gap: 3rem;
    padding-top: 2rem;

    @media (max-width:768px){
        grid-template-columns: 1fr;
        justify-items: center;
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


    return (

        <Section>
            <h1>{`${productCategory}`.toUpperCase()}</h1>
            <Filter subCategories={subCategories}></Filter>
            <Container>
                {currentProducts.map((product,index)=>{
                    return(
                        <Card key={index} image={product.image} price={product.price} name={product.name}></Card>
                    )
                })}
            </Container>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}></Pagination>
        </Section>
    )
}

export default ProductCategory
