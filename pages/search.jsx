import React,{useState} from 'react'
import { Search} from '@material-ui/icons'
import styled from 'styled-components'
import Card from '../components/productCategory/Card'
import Link from 'next/link'
import SearchFilter from '../components/search/SearchFilter'

const Section = styled.section`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    min-height:73vh;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    margin-top:3rem;
`

const ResultGroup = styled.div`
    width:92.5%;
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

const Input = styled.input`
    width:90%;
    height:2rem;
    padding-left:20px;
`
const InputContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    width:40%;
`

const A = styled.a`
    text-decoration: none;
    color: black;

    &:hover{
        color: black;
    }
`

export async function getStaticProps(context) {
    const res = await fetch("https://shivoriadmin.vercel.app/api/products")
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {products:data.data},
      revalidate:1
      // will be passed to the page component as props
    }
  }




const search = ({products}) => {
    

    const [text, setText] = useState("")
    const [results,setResults] = useState([])
    const [value,setValue] = useState("All")
    const [sort,setSort] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value);
    }
    console.log(sort)
    const handleSearch = ()=>{
        const items = products.filter((product=>{
            if(text){
                return(
                    product.name.toLowerCase().includes(text.toLowerCase())||
                    product.category.toLowerCase().includes(text.toLowerCase())||
                    product.subCategory.toLowerCase().includes(text.toLowerCase())||
                    product.sku.toLowerCase().includes(text.toLowerCase())||
                    product.desc.toLowerCase().includes(text.toLowerCase())
                )
            }
        }))
        
        items.reverse()
        setResults(items);
        setValue("All")
        setSort("asc")
        
    }


    const enterPressed = (e)=>{
        var code = e.keyCode || e.which;
    if(code === 13) { 
        handleSearch()
    } 
    }

    const subCategories =  [...new Set(results.map(product=>product.subCategory))];

    if(sort==="asc"){
        
        results.sort((a,b)=>a.price>b.price?1:-1)
        
    }else if(sort==="desc"){
        
        results.sort((a,b)=>a.price<b.price?1:-1)
    }else if(sort==="Newest"){
        results.reverse()
    }
    return (
        <Section>
            <Container>
                <InputContainer>
                <Input onChange={handleChange} placeholder='Search...' onKeyPress={enterPressed}></Input>
                <Search onClick={handleSearch}>Click</Search>
                </InputContainer>
                {results.length?<SearchFilter subCategories={subCategories} setValue={setValue} setSort={setSort}></SearchFilter>:<h1 style={{marginTop:'5rem'}}></h1>}
                <ResultGroup>
                {value==="All"? results.map((result,index)=>{
                    return(
                        <Link href={`/${result.category}/${result.sku}`} passHref key={index}>
                            <A>
                            <Card key={index} image={result.image1} price={result.price} name={result.name}></Card>
                            </A>
                        </Link>
                    )
                }):results.filter((result)=>result.subCategory===value).map((result,index)=>{
                    return(
                        <Link href={`/${result.category}/${result.sku}`} passHref key={index}>
                            <A>
                            <Card key={index} image={result.image1} price={result.price} name={result.name}></Card>
                            </A>
                        </Link>
                    )
                })}
                </ResultGroup>
            </Container>
        </Section>
    )
}

export default search
