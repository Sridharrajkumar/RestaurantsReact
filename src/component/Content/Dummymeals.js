import React from 'react'
import Card from './Card'
import classes from "./Dummymeals.module.css"  
import MealItem from './MealItem'


const Dummy=[
    {
        id:"m1",
        title:"Sushi",
        description:"Finest fish and veggies",
        price:22.50
    },
    {
        id:"m2",
        title:"Schnitzel",
        description:"A german specialty",
        price:16.50
    },
    {
        id:"m3",
        title:"Barbecue Burger",
        description:"American,raw,meaty",
        price:12.50
    },
    {
        id:"m4",
        title:"Green Bowl",
        description:"Healthy...and green...",
        price:10.50
    }
]



const Dummymeals = () => {

    const MealItems = Dummy.map((meal) => <MealItem
        key={meal.id}name={meal.title}
        description={meal.description}
        price={meal.price}/>
    
    )
    return (
      
        <div className={classes.meal}>
           <Card><ul>{MealItems}</ul></Card> 
        </div>
    
  )
}

export default Dummymeals;