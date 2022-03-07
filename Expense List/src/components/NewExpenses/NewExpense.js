import React from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (
        <ExpenseForm savingExpenseData={saveExpenseDataHandler} /> // communicating btw components UP; child to parent component
    )
}

export default NewExpense

