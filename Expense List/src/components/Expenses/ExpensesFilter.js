import React from 'react';
import styled from 'styled-components';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <Container>
            <Control>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2000'>2020</option>
                </select>
            </Control>
        </Container>
    );
};

export default ExpensesFilter;

const Container = styled.div`
display:flex;
padding-left:10px;
padding-right:15px;
border: 2px;
font-size: 15px;
letter-spacing:0.5px;
color:white;
text-transform:uppercase;

`
const Control = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
flex:1;
select{
    padding-left:20px;
    padding-right:10px;
    padding-top:2px;
    padding-bottom:2px;
    align-items: center;
    border-radius:7px;
}
`