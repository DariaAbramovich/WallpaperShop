import React from "react";
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import './payment.scss';
import { connect } from 'react-redux';
import { removeItemById } from '../../../redux/cart/cart.actions';



const Payment = ({ pactive, setPactive, sum, dataOrder,removeItem  }) => {
    const sel = document.getElementById('select');

    const getItem = () => {
        let itemSel= sel.value;
        console.log(itemSel);

    }
    const ends = ()=>{
        console.log('Order:',dataOrder)
       if(dataOrder !=0){
        dataOrder.map((dataOrder)=> removeItem(dataOrder.id))
       }
       alert("заказ был оформлен")

    }

    return (
        <>
            <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <h1 className="payment_title">Оформление заказа</h1>
                    {
                        sum != 0 ?
                            <div>
                                <div>Заказ на сумму: {sum} руб. </div>

                                <h3 className="p-select">Выберете способ доставки</h3>
                                <p>
                                    <select name="select" size="1" id='select' className='select'>
                                        <option value='def' required>Нет</option>
                                        <option value='sam'>Самовывоз</option>
                                        <option value='no_sam'>Доставка курьером</option>
                                    </select>
                                </p>
                                
                            </div>

                            : <div>Пока у вас нет товаров</div>
                    }
                    {/* <div>
                        <h3 className='p-select'>Выберете способ доставки</h3>
                        <p>
                            <select name="select" size="1" id='select'>
                                <option value='def' required>Нет</option>
                                <option value='sam'>Самовывоз</option>
                                <option value='no_sam'>Доставка курьером</option>
                            </select>
                        </p>
                    </div>  */}

                    <div className="btns_tab">
                      <button className="toPay" onClick={ends}><Link to='/basket/'>Подтведить заказ</Link></button>
                        <button className="toPay" onClick={() => setPactive(false)}>Отмена</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItemById(id))
});

export default connect(null, mapDispatchToProps) (Payment);