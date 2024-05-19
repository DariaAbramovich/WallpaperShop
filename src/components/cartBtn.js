// CardBtn.js
import React from 'react';
import basket from '../assets/icon/basket2.png'

const CartBtn = ({ cartItemCount }) => {
    return (
        <div className="cart-btn">
            <img src={basket} alt="Cart" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
    );
};

export default CartBtn;
