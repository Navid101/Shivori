import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { categories } from '../data'
import { useSelector } from 'react-redux'



import styled from 'styled-components'
const Container = styled.div`
    width:100%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:sticky;
    top:0;
    z-index:2;
    background-color:white;
    padding:50px 0;
    @media (max-width:768px){
        padding:70px 0;
    }
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    align-items: center;
    width: 93%;
    @media (max-width:768px){
        display:flex;
        flex-direction:column;
    }
`




const Logo = styled.img`
    width: 120px;
    height: auto;
    cursor: pointer;

`


const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-end;
    column-gap:3rem;
    @media (max-width:768px){
        padding-top:10px;
        justify-content:center;
    }
    
`

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    
`

const Hide = styled.div`
    @media (max-width:768px){
        display:none;
    }
`

const Show = styled.div`
    display:none;
    @media (max-width:768px){
        display:inline-block;
    }
`


const Navbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(async ()=>{
        const res = await fetch("https://shivoriadmin.vercel.app/api/products")
        const data = await res.json()
        const items = [...new Set(data.data.map((items=>items.category)))];
        setCategories(items)
    },[])
    const quantity = useSelector(state=>state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Hide><Link href="/search" passHref><Search style={{cursor:'pointer'}}></Search></Link></Hide>
                <Link href="/" passHref>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Logo src="/assets/logo.png"></Logo>
                    </div>
                </Link>
            
                <Right>
                    <Link href="/" passHref><MenuItem>Home</MenuItem></Link>
                    <DropdownButton title="Products">
                        {categories.map((category,index)=>{
                            return(
                                <Link href={`/${category.toLowerCase()}`} key={index} passHref>
                                    <Dropdown.Item>{category}</Dropdown.Item>
                                </Link>
                            )
                        })}
                    </DropdownButton>
                    <Show><Link href="/search" passHref><Search style={{cursor:'pointer'}}></Search></Link></Show>
                    <MenuItem>
                    <Link href="/cart">
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
