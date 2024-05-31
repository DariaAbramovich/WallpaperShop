
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const Stripe = require('stripe');
// // const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7dc'); // Replace with your Stripe secret key
// const stripe = Stripe('sk_test_Gx4mWEgHtCMr4DYMUIqfIrsz');
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('https://api.stripe.com/v1/payment_intents', async (req, res) => {
//     try {
//         const response = await axios.post('https://api.stripe.com/v1/payment_intents', new URLSearchParams({
//             amount: req.body.amount,
//             currency: 'rub',
//             payment_method_types: ['card']
//         }), {
//             headers: {
//                 'Authorization': `Bearer ${process.env.stripe}`,
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error creating payment intent:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_Gx4mWEgHtCMr4DYMUIqfIrsz'); // Secret key

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/payment-intents', async (req, res) => { // Fixing the endpoint URL
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'rub',
            payment_method_types: ['card']
        });
        res.json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));



// const express = require('express');
// const bodyParser = require('body-parser');
// const Stripe = require('stripe');
// const cors = require('cors');


// const app = express();
// const stripe = Stripe('sk_test_YourSecretKey'); // Replace with your Stripe secret key

// app.use(cors());
// app.use(express.json());

// app.post('/api/proxy/payment-intents', async (req, res) => {
//     try {
//         const { amount } = req.body;
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: 'usd',
//         });
//         res.status(200).send({ client_secret: paymentIntent.client_secret });
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
