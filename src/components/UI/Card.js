// it is a custom defined componet used for wrapping
import React from "react";
import "./Card.css";
function Card(props)
{
    //custom css that extracts properties of Card and those from props classname
    const classes = "card " + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;

// props.children is the content inside the custom defined component Card in ExpenseItem.js and Expenses.JS