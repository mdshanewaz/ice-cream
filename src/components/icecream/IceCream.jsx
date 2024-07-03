import React from "react";
import classes from './IceCream.module.css';
import Scoop from "./scoop/Scoop";

const IceCraem = () => {
    return(
        <div>
            <div className={classes.icecream}>
                <p classNam={classes.cone} />
                {/* please start adding scoops */}
                <Scoop />
                <div className={classes.cherry} />
            </div>
        </div>
    );
}

export default IceCraem;