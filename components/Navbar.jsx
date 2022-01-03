import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import Link from 'next/link'
import { categories } from '../data'
import { useSelector } from 'react-redux'


import styled from 'styled-components'
const Container = styled.div`
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:sticky;
    top:0;
    z-index:2;
    background-color:white;
    padding:50px 0;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    align-items: center;
    width: 93%;

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
    
`

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    padding: 0 10px;
`


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Link href="/search" passHref><Search style={{cursor:'pointer'}}></Search></Link>
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
                                <Link href={`/${category.name.toLowerCase()}`} key={index} passHref>
                                    <Dropdown.Item>{category.name}</Dropdown.Item>
                                </Link>
                            )
                        })}
                    </DropdownButton>
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
