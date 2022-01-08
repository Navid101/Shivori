import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const FilterContainer = styled.div`
    margin-top: 1rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:768px){
        flex-direction: column;
        row-gap: 1rem;
    }
`

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const Select = styled.select`
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
`
const Option = styled.option`
    width: 30px;
`





const SearchFilter = ({subCategories,setValue,setSort}) => {
    


    
    
    return (
        <FilterContainer>
            <FilterItem>
                <a>Filter Products</a>
                <Select name="subCategory" onChange={(e)=>setValue(e.target.value)}>
                    <Option>
                        All
                    </Option>
                    {subCategories.map((subCategory,index)=>{
                        return(
                            <Option key={index}>{subCategory}</Option>
                        )
                    })}
                </Select>
            </FilterItem>
            <FilterItem>
                <a>Sort Products</a>
                <Select name="order" onChange={(e)=>setSort(e.target.value)}>
                    <Option value="asc">
                        Low to High
                    </Option>
                    <Option value="desc">
                        High to Low
                    </Option>
                </Select>
            </FilterItem>
        </FilterContainer>
    )
}

export default SearchFilter
