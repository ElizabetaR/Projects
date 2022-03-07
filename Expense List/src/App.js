import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy_expenses = [
  {
    title: 'Car Insurance',
    amount: 234.43,
    date: new Date(2022, 7, 14),
  },
  {
    title: 'Laptop',
    amount: 680,
    date: new Date(2021, 3, 24),
  },
  {
    title: 'Wooden Desk',
    amount: 370.80,
    date: new Date(2021, 2, 26),
  },
  {
    title: 'New Console',
    amount: 400.45,
    date: new Date(2022, 6, 10),
  },
];


function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);


  const addExpense = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
