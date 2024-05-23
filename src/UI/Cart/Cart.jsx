import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import CartContext  from '../../store/CartContex'
import { currencyFormatter } from '../../utils/formatting'
import Button from '../Button/Button'
import OrderModal from '../../store/OrderContext'
import CartItem from './CartItem'

const Cart = () => {
    const cartCtx = useContext(CartContext)
    const modalStateCtx = useContext(OrderModal)
    

    const handleHideCart = () => {
        modalStateCtx.hideCart()
    }

    const handleOpenCheckoutModal = () => {
        modalStateCtx.ShowCheckout()
    }

    return (
        <Modal className='cart' open={modalStateCtx.progress === 'Cart'} onClose={modalStateCtx.progress === 'Cart' ? handleHideCart : null}>
            <h2>Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </ul>
            <p className='cart-total'> {currencyFormatter.format(cartCtx.totalAmount)} </p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleHideCart}>Close</Button>
                {
                    cartCtx.items.length > 0 && <Button onClick={handleOpenCheckoutModal} >Order</Button>
                }
            </p>
        </Modal>
    )
}

export default Cart