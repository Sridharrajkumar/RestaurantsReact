import React from 'react'
import classes from './MealItem.module.css'
const MealItem = ({key,name,description,price}) => {
  return (
      <li key={key} className={classes.meal}>
          <h3 className={classes.name}>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>$ {price}</div>
     </li>
  )
}

export default MealItem