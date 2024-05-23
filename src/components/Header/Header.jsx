import React, { useContext } from 'react'
import classes from './Header.module.css'
import logoImg from '../../assets/logo.jpg' 
import Button from '../../UI/Button/Button'
import CartContext from '../../store/CartContex'
import OrderContext from '../../store/OrderContext'


const Header = () => {
    const cartCtx = useContext(CartContext)
    const modalStateCtx = useContext(OrderContext)
    
    const TotalCartlenght = cartCtx?.items?.reduce((acc, item) => acc + item.quantity, 0)

    const handleShowCart = () => {
        console.log("handleShowCart",modalStateCtx);
        modalStateCtx.showCart()
    }

    return (
        <header className={classes['main-header']}>
        <div className={classes.title}>
            <img  src={logoImg} alt="logoMealReactProject" />
            <h1>National Meals</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({TotalCartlenght})</Button>
        </nav>
        </header>
    )
}

export default Header;