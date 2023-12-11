// App.js
import React, { useState } from 'react';
import ExpenseDetails from './components/Expenses/ExpenseDetails';

import './components/Expenses/ExpenseItem.css'

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 9, 13),
      title: "Food",
      amount: 50,
      locationOfExpenditure: "Hotel",
    },
    {
      id: 'e2',
      date: new Date(2023, 9, 13),
      title: "Petrol",
      amount: 100,
      locationOfExpenditure: "Petrol Pump",
    },
    {
      id: 'e3',
      date: new Date(2023, 9, 13),
      title: "Movies",
      amount: 200,
      locationOfExpenditure: "Inox",
    }
  ];
  const ExpenseItem=(props)=>{
const title=props.title

const updatedExpense=()=>{
  title='100$'
  console.lod(title)
}
  }
  }
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h1>Expense Item!</h1>
        </div>
        <h2>{title}</h2>;
      </div>
     
      <div>
        <ExpenseDetails expenses={expenses} />
      </div>
      <button onClick={() => updatedExpense}>Change to $100</button>
    </div>
  );


export default App;
