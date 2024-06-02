import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../../components/cart';
import './basket.scss';
import Payment from './Payment/payment';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7dc');

const BasketComponent = ({ cartItems, removeFromCart, updateQuantity, removeAllItems }) => {
    const [paymentActive, setPaymentActive] = useState(false);

    const calculateTotalPrice = () => {
        const total = cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0);
        return Math.round(total * 100) / 100; // Round to 2 decimal places
    };

    const handleRemoveAll = () => removeAllItems();

    return (
        <div className="container">
            <div className='basket-wrapper'>
                <div className='basket_title'>Basket</div>
                <div className='product-container'>
                    <div className='product-container_item'>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    </div>
                    <div className='product-container_info'>
                        <div className='info-price'>
                            <div>Order Total:</div>
                            <div>{calculateTotalPrice().toFixed(2)} руб</div>
                        </div>
                        <button className='info_btn' onClick={() => setPaymentActive(true)}>Checkout</button>
                        {calculateTotalPrice() > 0 && (
                            <button className='btn_clear_cart' onClick={handleRemoveAll}>Clear Cart</button>
                        )}
                    </div>
                </div>
                {paymentActive && (
                    <Elements stripe={stripePromise}>
                        <Payment pactive={paymentActive} setPactive={setPaymentActive} sum={calculateTotalPrice()} />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default BasketComponent;
