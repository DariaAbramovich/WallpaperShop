import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './formPayment';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51P6VUrP7lnROLvJXOWui7yoY2Tve3HiIA7aPOqImfQlO8YoGzBsrBnI9OIDk924D2IWf9FuCdcFxcoRCdEldhFKz009344pdCk');

export default function ToPaymentFunction() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51P6VUrP7lnROLvJXSGN7I9WVVhyuuGeLF33uaZSNqL98ox40a8wAMbOYSfUPUhzJKKa77a139ZMp4CEUnJ58adDl00CGXYFJqg',
  };


  return (
    <Elements stripe={stripePromise} options={options}>
    {/* <CheckoutForm/> */}
    </Elements>
  );
};