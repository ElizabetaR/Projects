import React, { useState } from 'react'
import styled from 'styled-components'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.savingExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('')
        setEnteredAmount('')
    };

    return (
        <Container>
            <form onSubmit={submitHandler}>
                <Controls>
                    <Control>
                        <label>Title</label>
                        <input                  // every input element has a value
                            type="text"
                            value={enteredTitle}   //we pass a new value back into the input so we can reset or change the input 
                            onChange={titleChangeHandler}  // we listen for changes
                        />
                    </Control>
                    <Control>
                        <label>Amount</label>
                        <input
                            type='number'
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler} />
                    </Control>
                    <Control>
                        <label>Date</label>
                        <input
                            type='date'
                            value={enteredDate}
                            onChange={dateChangeHandler} />
                    </Control>
                </Controls>
                <Action>
                    <button type="submit">Add Expense</button>
                </Action>
            </form>
        </Container >
    )
}

export default ExpenseForm

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
   letter-spacing:1.5px;
    `

const Controls = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const Control = styled.div`
    label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`

const Action = styled.div`
    text-align: right;

    button{
    font: inherit;
   font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 2rem;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
    background-color: #383838;
    opacity: 0.9;
    border-color:#ececec;

    &:hover {
       background-color: #2a2a2a;
    }
}
`