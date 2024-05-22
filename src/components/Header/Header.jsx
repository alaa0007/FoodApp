import React from 'react'
import classes from './Header.module.css'
import logoImg from '../../assets/logo.jpg' 
import Button from '../../UI/Button/Button'

const Header = () => {
  return (
    <header className={classes['main-header']}>
      <div className={classes.title}>
        <img  src={logoImg} alt="logoMealReactProject" />
        <h1>National Meals</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  )
}

export default Header;