// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const stripe = require('stripe')('sk_test_Gx4mWEgHtCMr4DYMUIqfIrsz');

// // const app = express();
// // const port = 3001;

// // app.use(bodyParser.json());

// // // Endpoint for creating payment intents
// // app.post('/payment_intents', async (req, res) => {
// //     try {
// //         const { amount } = req.body;
// //         const paymentIntent = await stripe.paymentIntents.create({
// //             amount,
// //             currency: 'usd',
// //             // Other payment intent options if needed
// //         });
// //         res.status(200).json({ client_secret: paymentIntent.client_secret });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server is listening on port ${port}`);
// // });
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const stripe = require('stripe')('sk_test_Gx4mWEgHtCMr4DYMUIqfIrsz');

// // const app = express();
// // const port = 3001;

// // app.use(bodyParser.json());

// // app.post('/payment_intents', async (req, res) => {
// //     try {
// //         const { amount } = req.body;
// //         const paymentIntent = await stripe.paymentIntents.create({
// //             amount,
// //             currency: 'usd',
// //         });
// //         res.status(200).json({ client_secret: paymentIntent.client_secret });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server is listening on port ${port}`);
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// // Проксирующий маршрут для запросов к Stripe API
// app.post('/stripe-api', async (req, res) => {
//     try {
//         const response = await axios.post('https://merchant-ui-api.stripe.com/elements/wallet-config', req.body);
//         res.status(200).json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
