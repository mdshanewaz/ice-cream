import React from "react";
import classes from './scoop.module.css'


const Scoop = () => {
    return (
        <div className={[classes.scoop, classes.orange].join(' ')} />
    );
}

export default Scoop;