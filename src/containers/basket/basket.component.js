import axios from 'axios'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './basket.scss';
import { Search } from '../Search/search';
import BasketCard from '../../components/basket-card';
import notProducts from '../../assets/icon/shopping.png'
import Payment from './Payment/payment';
import Modal from '../../components/modal';
import Cart from '../../components/cart';
import delete_btn from '../../assets/icon/delete.png';

const BasketComponent = ({cartItems,removeFromCart,updateQuantity,removeAllItems}) => {
    const [paymentActive, setPaymentActive] = useState(false)
    const calculateTotalPrice = () => { 
        return cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0); 
    }; 
    const totalePrice = calculateTotalPrice();

    const handleRemoveAll = () => {
        removeAllItems();
    };
    return(
        <div className="container">

            <div className='basket-wrapper'>
            <h1 className='baket-header-tile'>Basket</h1>
                <div>
                    <div className='product-container'>
                        <div className='product-container_item'>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
                        
                        </div>
                        <div className='product-container_info'>
                            <div>
                                <div className='info-price'>    
                                    <div >Сумма заказа:</div>
                                    <div>{calculateTotalPrice()} руб</div> 
                                </div>
                                <div>
                                </div>
                             <button className='info_btn' onClick={()=>setPaymentActive(true)}>Офомить заказ</button>
                            </div>
                            <div className='clear_cart'>
                            {
                                totalePrice == 0 ? (
                                    <>
                                    </> 
                                )
                                :(
                                    <button className='btn_clear_cart' onClick={handleRemoveAll}><div>Очистить корзину</div></button>
                                )

                            }

                            </div>
                        </div>
                    </div>
                </div>
               
                
            {/* <Payment pactive={paymentActive} setPactive={setPaymentActive} sum={total} dataOrder={items}/> */}

            </div>

        </div>
    )
}


export default BasketComponent;