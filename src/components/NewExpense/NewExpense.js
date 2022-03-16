import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [buttonActive, setButtonActive] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButtonActive(false);
  };

  const ExpenseContentHandler = () => {
    setButtonActive(true);
  };

  const CancelExpenseHandler = () => {
    setButtonActive(false);
  };

  return (
    <div className="new-expense">
      {!buttonActive && (
        <button onClick={ExpenseContentHandler}>Add new expense</button>
      )}

      {buttonActive && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          cancelExpense={CancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
