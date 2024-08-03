

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import Cart from '../../components/cart';
import './basket.scss';
import Payment from './Payment/payment';



const BasketComponent = ({ cartItems, removeFromCart, updateQuantity, removeAllItems,user }) => {
    const [paymentActive, setPaymentActive] = useState(false);

    const [userCart, setUserCart] = useState([]);

    
    const calculateTotalPrice = () => {
        const total = cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0);
        return Math.round(total * 100) / 100; // Round to 2 decimal places
    };

    const handleRemoveAll = () => removeAllItems();

    const totalPrice = calculateTotalPrice();

    return (
        <div className="container">
            <div className='basket-wrapper'>
                <div className='basket_title'>Корзина</div>
                <div className='product-container'>
                    <div className='product-container_item'>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    </div>
                    <div className='product-container_info'>
                        <div className='info-price'>
                            <div>Сумма заказа:</div>
                            <div>{totalPrice.toFixed(2)} руб</div>
                        </div>
                        <button
                            className={`info_btn ${totalPrice === 0 ? 'disabled' : ''}`}
                            onClick={() => setPaymentActive(true)}
                            disabled={totalPrice === 0}
                        >
                            Оформить заказ
                        </button>
                        {totalPrice > 0 && (
                            <button className='btn_clear_cart' onClick={handleRemoveAll}>Очистить корзину</button>
                        )}
                    </div>
                </div>
                {paymentActive && (
                    <div>
                        <Payment pactive={paymentActive} setPactive={setPaymentActive} sum={totalPrice} handleRemoveAll={handleRemoveAll} dataOrder={cartItems} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BasketComponent;
