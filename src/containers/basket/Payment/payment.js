import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './payment.scss';
import { removeItemById } from '../../../redux/cart/cart.actions';

const Payment = ({ pactive, setPactive, sum, dataOrder, removeItem }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [entrance, setEntrance] = useState('');
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const validateForm = () => {
        const errors = {};

        if (!name) errors.name = 'Name is required';
        if (!surname) errors.surname = 'Surname is required';
        if (!phone || phone.length !== 19) errors.phone = 'Valid phone number is required';
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

    const handleOrderCompletion = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setSubmitAttempted(true);
            return;
        }
        if (dataOrder && dataOrder.length > 0) {
            dataOrder.forEach(item => removeItem(item.id));
        }
        alert("Order has been placed successfully!");
    };

    const fieldClass = (fieldName) => {
        return submitAttempted && fieldName in validateForm() ? 'error' : '';
    };

    return (
        <>
            <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <div className="payment_title">Order Checkout</div>
                    <div>
                        <div>
                            <label>Enter your name<span className="required">*</span></label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={fieldClass('name')}
                            />
                            {submitAttempted && validateForm().name && <div className="error-message">{validateForm().name}</div>}
                        </div>
                        <div>
                            <label>Enter your surname<span className="required">*</span></label>
                            <input
                                type="text"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                                className={fieldClass('surname')}
                            />
                            {submitAttempted && validateForm().surname && <div className="error-message">{validateForm().surname}</div>}
                        </div>
                        <div>
                            <label>Enter your phone<span className="required">*</span></label>
                            <InputMask
                                mask="+375 99 999 99 99"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className={fieldClass('phone')}
                            />
                            {submitAttempted && validateForm().phone && <div className="error-message">{validateForm().phone}</div>}
                        </div>

                        <h3 className="p-select">Choose delivery method</h3>
                        <p>
                            <select
                                name="select"
                                value={deliveryMethod}
                                onChange={e => setDeliveryMethod(e.target.value)}
                                className={fieldClass('deliveryMethod')}
                            >
                                <option value="" disabled>Select delivery method</option>
                                <option value="pickup">Pickup</option>
                                <option value="delivery">Courier delivery</option>
                            </select>
                        </p>
                        {deliveryMethod === 'pickup' && (
                            <div>
                                <label>Choose pickup location<span className="required">*</span></label>
                                <select
                                    value={pickupLocation}
                                    onChange={e => setPickupLocation(e.target.value)}
                                    className={fieldClass('pickupLocation')}
                                >
                                    <option value="" disabled>Select pickup location</option>
                                    <option value="first">First street</option>
                                    <option value="second">Second street</option>
                                    <option value="third">Third street</option>
                                </select>
                                {submitAttempted && validateForm().pickupLocation && <div className="error-message">{validateForm().pickupLocation}</div>}
                            </div>
                        )}
                        {deliveryMethod === 'delivery' && (
                            <>
                                <div>
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
                                        {/* Добавьте другие города по мере необходимости */}
                                    </select>
                                    {submitAttempted && validateForm().city && <div className="error-message">{validateForm().city}</div>}
                                </div>
                                <div>
                                    <label>Enter street<span className="required">*</span></label>
                                    <input
                                        type="text"
                                        value={street}
                                        onChange={e => setStreet(e.target.value)}
                                        className={fieldClass('street')}
                                    />
                                    {submitAttempted && validateForm().street && <div className="error-message">{validateForm().street}</div>}
                                </div>
                                <div>
                                    <label>Enter house number<span className="required">*</span></label>
                                    <input
                                        type="number"
                                        value={houseNumber}
                                        onChange={e => setHouseNumber(e.target.value)}
                                        className={fieldClass('houseNumber')}
                                    />
                                    {submitAttempted && validateForm().houseNumber && <div className="error-message">{validateForm().houseNumber}</div>}
                                </div>
                                <div>
                                    <label>Enter entrance</label>
                                    <input
                                        type="number"
                                        value={entrance}
                                        onChange={e => setEntrance(e.target.value)}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div>Order amount: {sum} BYN</div>
                    <div className="btns_tab">
                        <button
                            className="toPay"
                            onClick={handleOrderCompletion}
                        >
                            купить
                            {/* <Link to='/basket/'>Pay</Link> */}
                        </button>
                        <button className="toPay" onClick={() => setPactive(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItemById(id))
});

export default connect(null, mapDispatchToProps)(Payment);
