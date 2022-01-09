import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Error = () => {
    return (
        <Container>
            <h1>No Products to show yet</h1>
        </Container>
    )
}

export default Error
