import React from 'react'
import classes from './Meals.module.css'
import { currencyFormatter } from '../../utils/formatting'
import Button from '../../UI/Button/Button'
const MealItem = ({ meal }) => {
  return (
    <li className={classes['meal-item']}>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className={classes['meal-item-description']}>{meal.description}</p>
                <p className={classes['meal-item-price']}>{currencyFormatter.format(meal.price)}</p>
            </div>
            <p className={classes['meal-item-actions']}>
                <Button>Add to cart</Button>
            </p>
        </article>
    </li>
  )
}

export default MealItem