import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {

  //must be called directly under the function.
  //return value and a modifying function.
  //first value is current state value
  //second value is a function for updating that value.
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  // }
 

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
