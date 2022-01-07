import React,{useState} from 'react'
import styled from 'styled-components'
import Order from '../components/checkout/Order'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { clearProducts } from '../redux/cartRedux'


const Section = styled.section`
    min-height:77vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    column-gap:3rem;
    width:90%;
    margin:auto;
    margin-top:3rem;
    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        row-gap:3rem;
    }
`


const Container = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    width:100%;
`

const Border = styled.span`
    border:1px solid black;
    width:60%;
    margin-top:5px;
`

const Form = styled.form`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    width:100%;
    row-gap:1rem;
    margin-top:1rem;
`
const Label = styled.label`
    font-size:26px;
`
const Input = styled.input`
    width:60%;
    height:30px;
    background-color:#eeeeee;
    border:none;
`
const Button = styled.button`
    width:100%;
    border:none;
    background-color:#eeeeee;
    height:30px;
    margin-top:2rem;
    transition: all 0.3s ease-in;

    &:hover{
        background-color:#003F36;
        color:white;
    }
`

const checkout = () => {
    const dispatch = useDispatch();
    const [flag,setFlag] = useState(true);
    const items = useSelector(state => state.cart.products)
    const products = items.map(item=>{
        return (
            {
                id:item._id,
                price:item.price,
                quantity:item.quantity,
                sku:item.sku,
                image:item.image1
            }
        )
    })
    const total = useSelector(state=>state.cart.total)
    const [order, setOrder] = useState({
        name:'',
        address:'',
        phone:'',
        email:'',
        status:'pending',
        products,
        subTotal:total
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(order)
        CreateOrder()
    }
    const handleChange = (e)=>{
        setOrder({
            ...order,
            [e.target.name]:e.target.value
        })
    }
    const CreateOrder = async()=>{
        try {
            const res = await axios.post(`https://shivoriadmin.vercel.app/api/orders`,order);
            console.log(JSON.stringify(order));
            setFlag(false)
            dispatch(clearProducts())
        } catch (error) {
            alert("Something went wrong. Please fill out the fields in billing details carefully")
            console.log(error);
        }

    }
    if(flag){
        return (
            <Section>
            <Wrapper>
                <Container>
                <h3>Billing Details</h3>
                <Border></Border>
                <Form >
                    <Label htmlFor="">Name</Label>
                    <Input type="text" placeholder='Enter Name' name='name' onChange={handleChange}/>
                    <Label htmlFor="">Address</Label>
                    <Input type="text" placeholder='Enter Address' name= "address" onChange={handleChange}/>
                    <Label htmlFor="">Phone</Label>
                    <Input type="text" placeholder='Enter Phone Number' name='phone' onChange={handleChange}/>
                    <Label htmlFor="">Email</Label>
                    <Input type="text" placeholder='Enter Email' name='email' onChange={handleChange}/>
                </Form>
                </Container>
                <Container>
                <h3>Your Order</h3>
                <Border style={{width:'100%'}}></Border>
                <Order></Order>
                <Button onClick={handleSubmit}>Place Order</Button>
                </Container>
            </Wrapper>
            </Section>
        )
    }else{
        return (
            <Section>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'90%',height:'auto',flexDirection:'column'}}>
                <h3>Your order has been placed!</h3>
                <h3>Thank you for shopping with us</h3>
            </div>
            </Section>
        )
    }
}

export default checkout
