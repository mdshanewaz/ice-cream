import React from "react";
import classes from './Builder.module.css';
import Items from './Items/Items';
import Totalprice from './totalPrice/TotalPrice';

const Builder = () => {
    return (
        <div>
            <div className={classes.builder}>
                <h3>build your own icecream Sunday</h3>
                <Items />
                <Totalprice />
                <button className={[classes.order, "rounded"].join()} type="button">Add To Cart</button>
            </div>
        </div>
    );
}