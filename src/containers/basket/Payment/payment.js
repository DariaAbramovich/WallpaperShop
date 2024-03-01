import React from "react";
import './payment.scss';

           
const Payment = ({ pactive, setPactive, sum, dataOrder })=>{
    return(
        <>
            <div className={pactive ? "modal active":"modal"} onClick={() => setPactive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <h1 className="payment_title">Оформление заказа</h1>
                  {
                    sum !=0?
                     <div>Заказ на сумму: {sum} руб. </div> 
                    : <div>Пока у вас нет товаров</div>
                  }
                  
                  <div className="btns_tab">
                        <button className="toPay">Оплатить</button>
                        <button className="toPay">Отмена</button>
                  </div>
                  
                </div>
            </div>
        </>
    )
}

export default Payment;