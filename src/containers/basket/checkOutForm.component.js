
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import './Payment/payment.scss';
// const CheckoutForm = ({ totalPrice,pactive, setPactive, }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const [message, setMessage] = useState('');
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         try {
//             const response = await axios.post('https://api.stripe.com/v1/payment_intents', {
//                 amount: totalPrice
//             });

//             const { client_secret } = response.data;

//             const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         name: 'Customer Name',
//                     },
//                 },
//             });

//             if (error) {
//                 setError(error.message);
//                 setMessage('');
//             } else {
//                 setSuccess(true);
//                 setMessage('Оплата была проведена успешно!');
//                 setError(null);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
//                 <div className="modal_content" onClick={e => e.stopPropagation()}>

//         <form onSubmit={handleSubmit}>
//              <CardElement />
//              <button type="submit" disabled={!stripe}>
//                         Оплатить
//                     </button>
//                     {error && <div>{error}</div>}
//                     {message && <div className="success-message">{message}</div>}
       
//         </form>
//         </div>
//         </div>

//     );
// }

// export default CheckoutForm;

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
// import axios from 'axios';
import './Payment/payment.scss';

// const CheckoutForm = ({ totalPrice, pactive, setPactive }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const [message, setMessage] = useState('');
  
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         try {
//             const response = await axios.post('/api/proxy/payment-intents', {
//                 amount: totalPrice
//             });

//             const { client_secret } = response.data;

//             const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         name: 'Customer Name',
//                     },
//                 },
//             });

//             if (error) {
//                 setError(error.message);
//                 setMessage('');
//             } else {
//                 setSuccess(true);
//                 setMessage('Оплата была проведена успешно!');
//                 setError(null);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
//             <div className="modal_content" onClick={e => e.stopPropagation()}>
           
//                 <form onSubmit={handleSubmit}>
        
//                     <CardElement />
//                     <button type="submit" disabled={!stripe}>Оплатить</button>
//                     {error && <div>{error}</div>}
//                     {message && <div className="success-message">{message}</div>}
                   
//                 </form>
               
//             </div>
//         </div>
//     );
// };

// export default CheckoutForm;

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
// import './payment.scss';

const CheckoutForm = ({ totalPrice, setPactive }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        try {
            const response = await axios.post('/api/payment-intents', { amount: totalPrice });
            const { client_secret } = response.data;
            const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: cardElement,
                    billing_details: { name: 'Customer Name' },
                },
            });

            if (error) {
                setError(error.message);
                setMessage('');
            } else {
                setMessage('Payment successful!');
                setError(null);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="modal active" onClick={() => setPactive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button type="submit" disabled={!stripe}>Pay</button>
                    {error && <div>{error}</div>}
                    {message && <div className="success-message">{message}</div>}
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
