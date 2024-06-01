
// // import React, { useState } from 'react';
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import axios from 'axios';
// // import './Payment/payment.scss';
// // const CheckoutForm = ({ totalPrice,pactive, setPactive, }) => {
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const [error, setError] = useState(null);
// //     const [success, setSuccess] = useState(false);
// //     const [message, setMessage] = useState('');
// //     const handleSubmit = async (event) => {
// //         event.preventDefault();

// //         if (!stripe || !elements) {
// //             return;
// //         }

// //         const cardElement = elements.getElement(CardElement);

// //         try {
// //             const response = await axios.post('https://api.stripe.com/v1/payment_intents', {
// //                 amount: totalPrice
// //             });

// //             const { client_secret } = response.data;

// //             const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
// //                 payment_method: {
// //                     card: cardElement,
// //                     billing_details: {
// //                         name: 'Customer Name',
// //                     },
// //                 },
// //             });

// //             if (error) {
// //                 setError(error.message);
// //                 setMessage('');
// //             } else {
// //                 setSuccess(true);
// //                 setMessage('Оплата была проведена успешно!');
// //                 setError(null);
// //             }
// //         } catch (error) {
// //             setError(error.message);
// //         }
// //     };

// //     return (
// //         <div className={pactive ? "modal active" : "modal"} onClick={() => setPactive(false)}>
// //                 <div className="modal_content" onClick={e => e.stopPropagation()}>

// //         <form onSubmit={handleSubmit}>
// //              <CardElement />
// //              <button type="submit" disabled={!stripe}>
// //                         Оплатить
// //                     </button>
// //                     {error && <div>{error}</div>}
// //                     {message && <div className="success-message">{message}</div>}
       
// //         </form>
// //         </div>
// //         </div>

// //     );
// // }

// // export default CheckoutForm;

// // import React, { useState } from 'react';
// // import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
// // import axios from 'axios';
// import './Payment/payment.scss';

// // import { useState } from 'react';
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import axios from 'axios';

// // const CheckoutForm = ({ totalPrice, setPactive }) => {
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const [error, setError] = useState(null);
// //     const [message, setMessage] = useState('');

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //         if (!stripe || !elements) return;

// //         const cardElement = elements.getElement(CardElement);
// //         console.log('Submitting payment with amount:', totalPrice); // Debugging log
// //         try {
// //             const response = await axios.post('http://localhost:3001/payment_intents', { amount: totalPrice });
// //             console.log('Server response:', response); // Debugging log
// //             const { client_secret } = response.data;
// //             const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
// //                 payment_method: {
// //                     card: cardElement,
// //                     billing_details: { name: 'Customer Name' },
// //                 },
// //             });

// //             if (error) {
// //                 setError(error.message);
// //                 setMessage('');
// //             } else {
// //                 setMessage('Payment successful!');
// //                 setError(null);
// //             }
// //         } catch (error) {
// //             setError(error.message);
// //         }
// //     };

// //     return (
// //         <div className="modal active" onClick={() => setPactive(false)}>
// //             <div className="modal_content" onClick={e => e.stopPropagation()}>
// //                 <form onSubmit={handleSubmit}>
// //                     <CardElement />
// //                     <button type="submit" disabled={!stripe}>Pay</button>
// //                     {error && <div>{error}</div>}
// //                     {message && <div className="success-message">{message}</div>}
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CheckoutForm;

// // import { useState } from 'react';
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import axios from 'axios';

// // const CheckoutForm = ({ totalPrice, setPactive }) => {
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const [error, setError] = useState(null);
// //     const [message, setMessage] = useState('');

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //         if (!stripe || !elements) return;

// //         const cardElement = elements.getElement(CardElement);
// //         console.log('Submitting payment with amount:', totalPrice); // Debugging log
// //         try {
// //             const response = await axios.post('http://localhost:3001/payment_intents', { amount: totalPrice });
// //             console.log('Server response:', response.data); // Debugging log
// //             const { client_secret } = response.data;
// //             console.log('Client secret:', client_secret); // Debugging log
            
// //             // Confirm the payment using client_secret
// //             const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
// //                 payment_method: {
// //                     card: cardElement,
// //                     billing_details: { name: 'Customer Name' },
// //                 },
// //             });

// //             if (error) {
// //                 setError(error.message);
// //                 setMessage('');
// //             } else {
// //                 setMessage('Payment successful!');
// //                 setError(null);
// //             }
// //         } catch (error) {
// //             setError(error.message);
// //         }
// //     };

// //     return (
// //         <div className="modal active" onClick={() => setPactive(false)}>
// //             <div className="modal_content" onClick={e => e.stopPropagation()}>
// //                 <form onSubmit={handleSubmit}>
// //                     <CardElement />
// //                     <button type="submit" disabled={!stripe}>Pay</button>
// //                     {error && <div>{error}</div>}
// //                     {message && <div className="success-message">{message}</div>}
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };


// // export default CheckoutForm;
// import React, { useState, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// const CheckoutForm = ({ totalPrice, setPactive }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [message, setMessage] = useState('');
//     const [paymentIntentId, setPaymentIntentId] = useState(null);
//     const [clientSecret, setClientSecret] = useState(null);

//     useEffect(() => {
//         const createPaymentIntent = async () => {
//             try {
//                 const response = await axios.post('http://localhost:3001/stripe-api', { amount: totalPrice });
//                 const { client_secret } = response.data;
//                 setClientSecret(client_secret);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };

//         createPaymentIntent();
//     }, [totalPrice]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements || !clientSecret) return;

//         const cardElement = elements.getElement(CardElement);
//         // console.log('Submitting payment with amount:', totalPrice);
//         try {
//             const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: { name: 'Customer Name' },
//                 },
//             });

//             if (error) {
//                 setError(error.message);
//                 setMessage('Payment not');
//                 console.log('not')
//                 // setMessage('');
//             } else {
//                 setMessage('Payment successful!');
//                 setError(null);
//                 console.log('yes')
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="modal active" onClick={() => setPactive(false)}>
//             <div className="modal_content" onClick={e => e.stopPropagation()}>
//                 <form onSubmit={handleSubmit}>
//                     <CardElement />
//                     <button type="submit" >Pay</button>
//                     {error && <div>{error}</div>}
//                     {message && <div className="success-message">{message}</div>}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CheckoutForm;
