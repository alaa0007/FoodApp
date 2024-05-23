import React, { useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import CartContext from '../../store/CartContex'
import { currencyFormatter } from '../../utils/formatting'
import Input from '../Input/Input'
import Button from '../Button/Button'
import OrderModal from '../../store/OrderContext'
import { checkout } from '../../service/mealService'

const Checkout = () => {

    const cartCtx = useContext(CartContext);
    const modalStateCtx = useContext(OrderModal);
    const [success, setSuceess] = useState(false);

    const handleCloseModal = () => {
        modalStateCtx.hideCheckout();
        setSuceess(false);
    }


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const customerData = Object.fromEntries(formData.entries())
        try {
           const order = await checkout(cartCtx.items, customerData)
           if(order) {
                setSuceess(true);
                cartCtx.clearCart()
           }  
        } catch (error) {
            console.log();
        }
    }


    if(success) {
        console.log("modalStateCtx",modalStateCtx.progress);
        return (
            <Modal open={modalStateCtx.progress === 'Checkout'} onClose={handleCloseModal}>
                <h2>Success !</h2>
                <p>Thank you for your order!</p>
                <p>You will receive an email confirmation shortly.</p>
                <p className='modal-actions'>
                    <Button onClick={handleCloseModal}>Close</Button>
                </p>
            </Modal>
        )
    }

    return (
        <Modal open={modalStateCtx.progress === 'Checkout'} onClose={handleCloseModal}>
            <form className='checkout' onSubmit={handleSubmitForm}>
                <h2>Checkout</h2>
                <p> Total Amount : {currencyFormatter.format(cartCtx.totalAmount)}</p>
                <Input id="name" label="Full Name" type="text" required />
                <Input id="email" label="E-mail Address" type="email" required />
                <Input id="street" label="Street" type="text" required />
                <div className='control-row'>
                    <Input id="postal-code" label="Postal Code" type="text" required />
                    <Input id="city" label="City" type="text" required />
                </div>
                <p className='modal-actions'>
                    <Button type="button" textOnly onClick={handleCloseModal}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}

export default Checkout;