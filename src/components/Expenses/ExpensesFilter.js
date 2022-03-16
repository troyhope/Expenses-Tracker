import React from "react";

import "./ExpensesFilter.css";

//receiving dateFilter prop from Expenses parent to communicate the selected value.

const ExpensesFilter = (props) => {
  const dateFilterHandler = (event) => {
    props.dateFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
