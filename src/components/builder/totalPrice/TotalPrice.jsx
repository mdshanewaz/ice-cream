import React from "react";
import classes from './TotalPrice.module.css';

const Total = () => {
    return (
        <div className={classes.total}>
            <div>Total Price</div>
            <div>3000.00 Tk</div>
        </div>
    );
}

export default Total;