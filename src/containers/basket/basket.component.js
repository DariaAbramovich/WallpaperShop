// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';

// import CheckoutForm from './checkOutForm.component';
// import './basket.scss';
// import { Search } from '../Search/search';
// import BasketCard from '../../components/basket-card';
// import notProducts from '../../assets/icon/shopping.png'
// import Payment from './Payment/payment';
// import Modal from '../../components/modal';
// import Cart from '../../components/cart';
// import delete_btn from '../../assets/icon/delete.png';

// const BasketComponent = ({ cartItems, removeFromCart, updateQuantity, removeAllItems }) => {

//     const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7dc');
//     const [paymentActive, setPaymentActive] = useState(false);
//     const calculateTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0);
//     };
//     const totalePrice = calculateTotalPrice();

//     const handleRemoveAll = () => {
//         removeAllItems();
//     };
//     return (
//         <div className="container">

//             <div className='basket-wrapper'>
//                 <h1 className='baket-header-tile'>Basket</h1>
//                 <div>
//                     <div className='product-container'>
//                         <div className='product-container_item'>
//                             <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />

//                         </div>
//                         <div className='product-container_info'>
//                             <div>
//                                 <div className='info-price'>
//                                     <div >Сумма заказа:</div>   
//                                     <div>{calculateTotalPrice()} руб</div>
//                                 </div>
//                                 <div>
//                                     <button className='info_btn' onClick={() => setPaymentActive(true)}>Оформить заказ</button>

//                                 </div>
//                                 {/* {paymentActive && (
//                                     <Elements stripe={stripePromise}>
                                      
//                                         <CheckoutForm totalPrice={calculateTotalPrice()} />
//                                     </Elements>
//                 )} */}
//                                 <div>
//                                 </div>
//                                 {/* <button className='info_btn' onClick={()=>setPaymentActive(true)}>Офомить заказ</button> */}
//                             </div>
//                             <div className='clear_cart'>
//                                 {
//                                     totalePrice == 0 ? (
//                                         <>
//                                         </>
//                                     )
//                                         : (
//                                             <button className='btn_clear_cart' onClick={handleRemoveAll}><div>Очистить корзину</div></button>
//                                         )
//                                 }

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {paymentActive && (
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm totalPrice={calculateTotalPrice()} pactive={paymentActive} setPactive={setPaymentActive}/>
//                      </Elements>
//                 )}
//                 {/* <Payment pactive={paymentActive} setPactive={setPaymentActive} sum={total} dataOrder={items}/> */}

//             </div>

//         </div>
//     )
// }


// export default BasketComponent;

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkOutForm.component';
import Cart from '../../components/cart';
import './basket.scss';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7dc');

const BasketComponent = ({ cartItems, removeFromCart, updateQuantity, removeAllItems }) => {
    const [paymentActive, setPaymentActive] = useState(false);
    const calculateTotalPrice = () => cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0);
    
    const handleRemoveAll = () => removeAllItems();
    
    return (
        <div className="container">
            <div className='basket-wrapper'>
                <h1 className='basket-header-title'>Basket</h1>
                <div className='product-container'>
                    <div className='product-container_item'>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    </div>
                    <div className='product-container_info'>
                        <div className='info-price'>
                            <div>Order Total:</div>
                            <div>{calculateTotalPrice()} руб</div>
                        </div>
                        <button className='info_btn' onClick={() => setPaymentActive(true)}>Checkout</button>
                        {calculateTotalPrice() > 0 && (
                            <button className='btn_clear_cart' onClick={handleRemoveAll}>Clear Cart</button>
                        )}
                    </div>
                </div>
                {paymentActive && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm totalPrice={calculateTotalPrice()} setPactive={setPaymentActive} />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default BasketComponent;
