import React, { useCallback, useEffect, useState } from 'react'
import classes from './Meals.module.css'
import { getMeals } from '../../service/mealService'
import MealItem from './MealItem'


const Meals = () => {
  const [mealsList, setMealsList] = useState([])

  const mealList = useCallback(async () => {
    try {
      const meals = await getMeals() 
      if(meals) setMealsList(meals)
    } catch (error) {
      console.log(error)
    }
  }, [getMeals])

  useEffect(() => {
    mealList()
  }, [mealList])


  return (
    <ul className={classes.meals}>
      {
        mealsList?.map((meal)=> {
          return <MealItem key={meal.id} meal={meal} />
        })
      }
    </ul>
  )
}

export default Meals