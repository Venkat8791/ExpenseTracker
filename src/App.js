import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXEPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 19.23,
    date: new Date(2021, 2, 12),
  },
  { id: "e3", title: "New TV", amount: 150.4, date: new Date(2021, 2, 28) },
  {
    id: "e4",
    title: "Some books",
    amount: 12.55,
    date: new Date(2021, 5, 16),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXEPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
