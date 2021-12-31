import React, {useState} from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    
`

const Decreament = styled.button`
    width: 2rem;
    height: 2rem;
    font-weight: bold;
    background-color: white;
    border:1px solid black;
    border-radius: 5px;
`

const Increament = styled.button`
    width: 2rem;
    height: 2rem;
    font-weight: bold;
    background-color: white;
    border:1px solid black;
    border-radius: 5px;
`

const Button = ({count,setCount}) => {
    return(
        <Container>
            <Decreament onClick={()=>count===1?setCount(1):setCount(count-1)}>-</Decreament>
            <h4>{count}</h4>
            <Increament onClick={()=>setCount(count+1)}>+</Increament>
        </Container>
    )

}

export default Button
