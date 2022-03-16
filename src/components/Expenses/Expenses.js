import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [changeyear, setChangeYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setChangeYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === changeyear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          //sends the useState default year to the filter. named two way binding.
          selected={changeyear}
          dateFilter={filterChangeHandler}
        />
        <ExpensesChart chart={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
