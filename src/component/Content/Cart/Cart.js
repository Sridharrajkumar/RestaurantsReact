import React, { useContext } from 'react'
import Model from './Model'
import classes from './Cart.module.css'
import CartContext from '../../../Store/Cart-Context'
import CartItem from './CartItem'

const Cart = (props) => {

  const cartCxt = useContext(CartContext)
  
  const TotalCartAmount = `$${cartCxt.totalAmount.toFixed(2)}`;

 

  const cartItemAddHandler = (item) => {
    cartCxt.addItem({ ...item, amount: 1 });
  } 

  const cartItemRemoveHandler = (id) => {
      cartCxt.removeItem(id);
  }
  
  const Cartitem = <ul className={classes['cart-items']}>{cartCxt.items.map((item) =>
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />)}
  </ul>

  return (
    <Model Close={props.Close}>
          {Cartitem}
          <div className={classes.total}>
              <span>Total Amount</span>
        <span>{TotalCartAmount}</span>
          </div>  
          <div className={classes.actions}>
              <button className={classes['button--alt']} onClick={props.Close}>Close</button>
              <button className={classes.button}>Order</button>
          </div>
    </Model>
  )
}

export default Cart