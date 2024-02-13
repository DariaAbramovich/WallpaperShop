import axios from 'axios'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './basket.scss';
import { Search } from '../Search/search';
import BasketCard from '../../components/basket-card';

const BasketComponent = ({items, total }) => {

    return(
        <div className="container">

            <div className='basket-wrapper'>
            <h1 className='baket-header-tile'>Basket</h1>
                <div>
                    <div className='product-container'>
                        <div className='product-container_item'>
                        {
                            items.map(item => <BasketCard key={item.id} item={item} />)
                        }
                        </div>
                        <div className='product-container_info'>
                            <div className='info_count'>
                                {/* <p>Товары {} шт</p> */}
                            </div>
                            <div>
                                <div className='info-price'>
                                    <div >Итого:</div>
                                    <div >{total}</div>
                                </div>
                                <button className='info_btn'>Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.priceProduct * item.quantity, 0)
  });
export default connect(mapStateToProps)( BasketComponent);