import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import Link from 'next/link'
import { categories } from '../data'

import styled from 'styled-components'
const Container = styled.div`
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 93%;

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`



const Logo = styled.img`
    width: 120px;
    height: auto;
    cursor: pointer;
`


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    padding: 0 10px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link href="/" passHref><Logo src="/assets/logo.png"></Logo></Link>
                </Left>
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
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
