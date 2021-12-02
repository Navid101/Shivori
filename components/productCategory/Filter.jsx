import React from 'react'
import styled from 'styled-components'

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

const Filter = ({subCategories}) => {
    return (
        <FilterContainer>
            <FilterItem>
                <a>Filter Products</a>
                <Select>
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
                <Select>
                    <Option>
                        Newest
                    </Option>
                    <Option>
                        Low to High
                    </Option>
                    <Option>
                        High to Low
                    </Option>
                </Select>
            </FilterItem>
        </FilterContainer>
    )
}

export default Filter
