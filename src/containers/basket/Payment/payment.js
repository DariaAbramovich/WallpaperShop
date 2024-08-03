
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './payment.scss';
import { removeItemById } from '../../../redux/cart/cart.actions';

const Payment = ({ pactive, setPactive, sum, dataOrder, removeItem, handleRemoveAll }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [entrance, setEntrance] = useState('');
    const [flat, setFlat] = useState('');
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [cartIsEmpty, setCartIsEmpty] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const validateForm = () => {
        const errors = {};

        if (!name) errors.name = 'Name is required';
        if (!surname) errors.surname = 'Surname is required';
        if (!phone || phone.replace(/\D/g, '').length !== 12) errors.phone = 'Valid phone number is required';
        if (deliveryMethod === 'pickup' && !pickupLocation) errors.pickupLocation = 'Pickup location is required';
        if (deliveryMethod === 'delivery') {
            if (!city) errors.city = 'City is required';
            if (!street) errors.street = 'Street is required';
            if (!houseNumber) errors.houseNumber = 'House number is required';
        }

        return errors;
    };

    useEffect(() => {
        const isFormValid = Object.keys(validateForm()).length === 0;
        setIsFormValid(isFormValid);
    }, [name, surname, phone, deliveryMethod, pickupLocation, city, street, houseNumber]);

    useEffect(() => {
        if (dataOrder && dataOrder.length === 0) {
            setCartIsEmpty(true);
        }
    }, [dataOrder]);

    const handleOrderCompletion = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setSubmitAttempted(true);
            return;
        }
        if (dataOrder && dataOrder.length > 0) {
            dataOrder.forEach(item => removeItem(item.id));
            handleRemoveAll();
        }
        alert("Заказ успешно оформлен!");
    };

    const fieldClass = (fieldName) => {
        return submitAttempted && fieldName in validateForm() ? 'error' : '';
    };

    return (
        <>
            <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    {cartIsEmpty ? (
                        <>
                            <div className="empty-cart-message">Ваша корзина пуста.Пожалуйста, перейдите в <Link to={'/cataloge/'}>каталог</Link> .</div>
                        </>
                    ) : (
                        <>
                            <div className="payment_title">Оформление заказа</div>
                            <div className="form_grid">
                                <div>


                                    <div className='input_item_order'>
                                        <label className='label_payment'>Введите ваше имя<span className="required">*</span></label>
                                        <input
                                            type="text"
                                            value={name}
                                            placeholder='Имя'
                                            onChange={e => setName(e.target.value)}
                                            className={fieldClass('name')}
                                        />
                                        {submitAttempted && validateForm().name && <div className="error-message">{validateForm().name}</div>}
                                    </div>
                                    <div className='input_item_order'>
                                        <label className='label_payment'>Введите вашу фамилию<span className="required">*</span></label>
                                        <input
                                            type="text"
                                            value={surname}
                                            placeholder='Фамилия '
                                            onChange={e => setSurname(e.target.value)}
                                            className={fieldClass('surname')}
                                        />
                                        {submitAttempted && validateForm().surname && <div className="error-message">{validateForm().surname}</div>}
                                    </div>
                                    <div className='input_item_order'>
                                        <label className='label_payment'>Введите ваш телефон<span className="required">*</span></label>
                                        <InputMask
                                            placeholder='+375 99 999 99 99'
                                            mask="+375 99 999 99 99"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            className={fieldClass('phone')}
                                        />
                                        {submitAttempted && validateForm().phone && <div className="error-message">{validateForm().phone}</div>}
                                    </div>
                                   
                                </div>
                                <div className='input_item_order second-column'>
                                    <h3 className="p-select">Выберете способ доставки<span className="required">*</span></h3>
                                    <p >
                                        <select
                                            name="select"
                                            value={deliveryMethod}
                                            onChange={e => setDeliveryMethod(e.target.value)}
                                            className={fieldClass('deliveryMethod')}
                                        >
                                            <option value="" disabled>Не выбрано</option>
                                            <option value="pickup">Самовывоз</option>
                                            <option value="delivery">Доставка курьером</option>
                                        </select>
                                    </p>
                                    {deliveryMethod === 'pickup' && (
                                        <div>
                                            <label>Выберете точку самовывоза<span className="required">*</span></label>
                                            <select
                                                value={pickupLocation}
                                                onChange={e => setPickupLocation(e.target.value)}
                                                className={fieldClass('pickupLocation')}
                                            >
                                                <option value="" disabled>Не выбрано</option>
                                                <option value="first">г.Минск ул.Первая</option>
                                                <option value="second">г.Минск ул.Вторая</option>
                                                <option value="third">г.Минск ул.Третья</option>
                                            </select>
                                            <div >
                                                <h3 className="p-select">Выберите способ оплаты<span className="required">*</span></h3>
                                                <select
                                                    value={paymentMethod}
                                                    onChange={e => setPaymentMethod(e.target.value)}
                                                    className={fieldClass('paymentMethod')}
                                                >
                                                    <option value="" disabled>Выберите способ оплаты</option>
                                                    <option value="card">Карта</option>
                                                    <option value="cash">Наличные</option>
                                                </select>
                                            </div>
                                            {submitAttempted && validateForm().pickupLocation && <div className="error-message">{validateForm().pickupLocation}</div>}
                                        </div>
                                    )}
                                    {deliveryMethod === 'delivery' && (
                                        <>
                                            <div className='input_item_order'>
                                                <label>Выберите город<span className="required">*</span></label>
                                                <select
                                                    value={city}
                                                    onChange={e => setCity(e.target.value)}
                                                    className={fieldClass('city')}
                                                >
                                                    <option value="" disabled>Выберите город</option>
                                                    <option value="Minsk">Минск</option>
                                                    <option value="Brest">Брест</option>
                                                    <option value="Gomel">Гомель</option>
                                                    <option value="Grodno">Гродно</option>
                                                    <option value="Mogilev">Могилев</option>
                                                    <option value="Vitebsk">Витебск</option>
                                                </select>
                                                {submitAttempted && validateForm().city && <div className="error-message">{validateForm().city}</div>}
                                            </div>
                                            <div className='input_item_order'>
                                                <label className='label_payment'>Введите улицу<span className="required">*</span></label>
                                                <input
                                                    type="text"
                                                    value={street}
                                                    placeholder='Улица '
                                                    onChange={e => setStreet(e.target.value)}
                                                    className={fieldClass('street')}
                                                />
                                                {submitAttempted && validateForm().street && <div className="error-message">{validateForm().street}</div>}
                                            </div>
                                            <div className='input_item_order'>
                                                <label className='label_payment'>Введите номер дома<span className="required">*</span></label>
                                                <input
                                                    type="number"
                                                    placeholder='Номер дома'
                                                    value={houseNumber}
                                                    onChange={e => setHouseNumber(e.target.value)}
                                                    className={fieldClass('house Number')}
                                                />
                                                {submitAttempted && validateForm().houseNumber && <div className="error-message">{validateForm().houseNumber}</div>}
                                            </div>
                                            <div className='input_item_order'>
                                                <label className='label_payment'>Введите номер подъезда</label>
                                                <input
                                                    type="number"
                                                    value={entrance}
                                                    placeholder='Номер подъезда'
                                                    onChange={e => setEntrance(e.target.value)}
                                                />
                                            </div>
                                            <div className='input_item_order'>
                                                <label className='label_payment'>Введите номер квартиры</label>
                                                <input
                                                    type="number"
                                                    value={flat}
                                                    placeholder='Номер квартиры'
                                                    onChange={e => setFlat(e.target.value)}
                                                />
                                            </div>
                                            <div >
                                                <h3 className="p-select">Выберите способ оплаты<span className="required">*</span></h3>
                                                <select
                                                    value={paymentMethod}
                                                    onChange={e => setPaymentMethod(e.target.value)}
                                                    className={fieldClass('paymentMethod')}
                                                >
                                                    <option value="" disabled>Выберите способ оплаты</option>
                                                    <option value="card">Карта</option>
                                                    <option value="cash">Наличные</option>
                                                </select>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='summ'>Сумма заказа: {sum} руб.</div>
                            <div className="btns_tab">
                                <button
                                    className="toPay"
                                    onClick={handleOrderCompletion}
                                >
                                    Заказать
                                </button>
                                <button className="toPay" onClick={() => setPactive(false)}>Отмена</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItemById(id))
});

export default connect(null, mapDispatchToProps)(Payment);



