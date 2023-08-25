import React,{useContext, useRef, useState} from 'react'
import classes from './MealItem.module.css'
import CartContext from '../../Store/Cart-Context';
const MealItem = (props) => {
 
  const[amountIsValid,setAmountIsValid]=useState(true);
  const amountInputRef = useRef();
  const cartCtx= useContext(CartContext);

  
  
  
  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enterAmountInInteger = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5)
    {
      setAmountIsValid(false);
      return;
    }
    
    AddToCart(enterAmountInInteger);
  }

  const AddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price:props.price
    });
    
  }

 

  return (
    <li key={props.id} className={classes.product}>
      <div className={classes.meal}>
          <h3 className={classes.name}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>$ {props.price}</div>
        </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label>Amount </label>
          <input ref={amountInputRef} type="number" id="amount" defaultValue={1} min={1} max={5} />
        </div>
        <button>+Add</button>
        {!amountIsValid && <p>please a valid amount</p>}
        </form>
     </li>
  )
}

export default MealItem
