import React, { useContext } from 'react'
import { currencyFormatter } from '../../utils/formatting'
import CartContext from '../../store/CartContex'
const CartItem = ({ id, name, quantity ,price }) => {

  const cartCtx = useContext(CartContext);


  const handleAddItem = () => {
    cartCtx.addItem({id, name, quantity, price})
  }

  const handleRemoveItem = () => {
    cartCtx.removeItem(id)
  }

  return (
    <li className='cart-item'>
        <p>
            { name }- { quantity } - {currencyFormatter.format(price)} 
        </p>
        <p className='cart-item-actions'>
            <button onClick={handleRemoveItem}> - </button>
            <span> { quantity } </span>
            <button onClick={handleAddItem}> + </button>

        </p>
    </li>
  )
}

export default CartItem;