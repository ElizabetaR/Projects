import React, { useState } from 'react'
import styled from 'styled-components'
import ExpenseItem from '../Expenses/ExpenseItem'
import ExpensesFilter from './ExpensesFilter'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };



    return (
        <Container>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}



        </Container>
    )
}

export default Expenses

const Container = styled.div`
    padding: 1rem;
    background-color: #2f4f4f;
    margin: 2rem auto;
    margin-top:80px;
    width: 50rem;
    max-width: 95%;
    border: 4px solid transparent;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
`

