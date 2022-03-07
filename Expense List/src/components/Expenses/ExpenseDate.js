import React from 'react'
import styled from 'styled-components';

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <Date>
            <Day>{day}</Day>
            <Month>{month}</Month>
            <Year>{year}</Year>
        </Date>

    )
}

export default ExpenseDate

const Date = styled.div`
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`
const Day = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`
const Month = styled.div`
    font-size: 0.75rem;
    font-weight: bold;

`
const Year = styled.div`
    font-size: 0.75rem;
`