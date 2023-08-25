import React, { Fragment } from "react";
import classes from "./Navbar.module.css"
import mealImg from "../../images/meals.jpg"
import NavButton from "./NavButton";
import MealContent from "../Content/MealContent";

const Navbar = (props) => {

    return (
        <Fragment>
            <div className={classes.navbar}>
                <h1>ReactMeals</h1>
                <NavButton Show={props.Show}/>
            </div>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="navimg" />
            </div>
            <MealContent />
        </Fragment>
    )

}

export default Navbar;
    
