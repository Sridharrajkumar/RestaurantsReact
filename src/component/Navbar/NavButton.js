import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./Navbutton.module.css";
import CartContext from "../../Store/Cart-Context";


const NavButton = (props) => {
    
    const cartCtx = useContext(CartContext);
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0)

    return (
        <button className={classes.button} onClick={props.Show}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button> 
    )

    
}

export default NavButton;