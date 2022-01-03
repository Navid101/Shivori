import React,{useState} from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    min-height:73vh;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width:90%;
    margin-top:3rem;
`

const InputGroup = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    
`

const Input = styled.input`
    width:50%;
    height:2rem;
    padding-left:20px;
`
const search = () => {
    const [text, setText] = useState("")

    const handleChange = (e)=>{
        setText(e.target.value)
        
    }
    return (
        <Section>
            <Container>
                <Input onChange={handleChange} placeholder='Search...'></Input>
                <InputGroup>
                 <h1>{text}</h1>
                 <h1>{text}</h1>
                 <h1>{text}</h1>
                </InputGroup>
            </Container>
        </Section>
    )
}

export default search
