import React from 'react'
import classes from './Meals.module.css'
import { currencyFormatter } from '../../utils/formatting'
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
                <button>Add to cart</button>
            </p>
        </article>
    </li>
  )
}

export default MealItem