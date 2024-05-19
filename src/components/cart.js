

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
    const navigate = useNavigate();
    

    const handleRemove = (index) => {
        removeFromCart(index);
    };

    const handleBackToConstructor = () => {
        navigate('/constructor/')
    };

    return (
        <div className="cart_wrapper">
            <h1 className="cart_title">Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <div className="cart_items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart_item">
                            <p>Название: {item.nameproduct}</p>
                            <p>Тип обоев: {item.type}</p>
                            <p>Цвет: {item.colorProduct}</p>
                            <p>Рисунок: {item.image ? 'Да' : 'Нет'}</p>
                            <p>Ширина: {item.widthProduct} м</p>
                            <p>Цена: {item.priceProduct} руб.</p>
                            <button>+</button>
                            <div>count</div>
                            <button>-</button>
                            <button onClick={() => handleRemove(index)}>Удалить</button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleBackToConstructor}>Назад к конструктору</button>
        </div>
    );
};

export default Cart;
