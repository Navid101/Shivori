import React from 'react'
import styled from 'styled-components';

const List =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ListItem = styled.button`
    height: 30px;
    width: 30px;
    background-color: rgba(0,89,76,.3);
    color: white;
    text-align: center;
    margin: 0 2px;
    border: none;

    &:active{
        background-color: #ffffff;
        color: rgba(0,89,76,1);
    }
`

const Pagination = ({productsPerPage,totalProducts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<=Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
            <List >
                {pageNumbers.map(number=>{
                    if(pageNumbers.length>1){
                        return (
                            <ListItem onClick={()=>paginate(number)} key={number}>{number}</ListItem>
                            )
                    }
                })}
            </List>
    )
}

export default Pagination
