import React, { useCallback, useEffect, useState } from 'react'
import classes from './Meals.module.css'
import { getMeals } from '../../service/mealService'
import MealItem from './MealItem'
import useHttp from '../Hooks/useHttp'
import Error from '../../UI/Errors/Error'


const Meals = () => {
  // const [mealsList, setMealsList] = useState([])

  // const mealList = useCallback(async () => {
  //   try {
  //     const meals = await getMeals() 
  //     if(meals) setMealsList(meals)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [getMeals])

  // useEffect(() => {
  //   mealList()
  // }, [mealList])
  const { data : mealsList, isLoading, error,} = useHttp("http://localhost:3000/meals")

  if (error) {
    return <Error title="Failed to load meals" message={error} />
  }

  return (
    <ul className={classes.meals}>
      {isLoading ? <p className='loading'>Loading...</p>
      :
        mealsList?.map((meal)=> {
          return <MealItem key={meal.id} meal={meal} />
        })
      }
    </ul>
  )
}

export default Meals