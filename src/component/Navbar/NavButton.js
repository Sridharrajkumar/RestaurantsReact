import React from "react";
import CartIcon from "./CartIcon";
import classes from "./Navbutton.module.css"

const NavButton = () => {
    return (
        <button className={classes.button}>

            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>7</span>
        
       </button>
    )

    
}

export default NavButton;