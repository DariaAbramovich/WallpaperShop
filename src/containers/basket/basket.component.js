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

const BasketComponent = ({items, total }) => {
    const [paymentActive, setPaymentActive] = useState(false)
    return(
        <div className="container">

            <div className='basket-wrapper'>
            <h1 className='baket-header-tile'>Basket</h1>
                <div>
                    <div className='product-container'>
                        <div className='product-container_item'>
                        {
                            items != 0?
                                items.map(item => <BasketCard key={item.id} item={item} />)
                            :
                            <div className='wrapperr-not-product'>
                                <p className='not-product'>Пока у вас нет выбранных товаров </p>
                                <img src={notProducts} className='not-product_img'></img>
                            </div>
                        }
                        </div>
                        <div className='product-container_info'>
                            <div className='info_count'>
                            </div>
                            <div>
                                <div className='info-price'>
                                    <div >Итого:</div>
                                    <div >{total} руб</div>
                                </div>
                             <button className='info_btn' onClick={()=>setPaymentActive(true)}>Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Payment pactive={paymentActive} setPactive={setPaymentActive} sum={total} dataOrder={items}/>

            </div>

        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.priceProduct * item.quantity, 0)
});
export default connect(mapStateToProps)( BasketComponent);