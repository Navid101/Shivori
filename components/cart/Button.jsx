import React, {useState} from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    
`

const Decreament = styled.button`
    width: 1rem;
    height: 2rem;
    font-weight: bold;
    border: none;
    background-color: white;
`

const Increament = styled.button`
    width: 1rem;
    height: 2rem;
    font-weight: bold;
    border: none;
    background-color: white;
`

const Button = () => {
    const [count,setCount] = useState(1);
    return(
        <Container>
            <h4>Quantity: </h4>
            <Decreament onClick={()=>count===1?setCount(1):setCount(count-1)}>-</Decreament>
            <h4>{count}</h4>
            <Increament onClick={()=>setCount(count+1)}>+</Increament>
        </Container>
    )

}

export default Button