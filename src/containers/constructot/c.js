// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import notProducts from '../assets/icon/shopping.png';
// import defaultImg from './../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg';
// import delete_btn from '../assets/icon/delete.png';

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
//     const navigate = useNavigate();

//     const handleRemove = (index) => {
//         removeFromCart(index);
//     };

//     const handleBackToConstructor = () => {
//         navigate('/constructor/');
//     };

//     const handleBackToCatalog = () => {
//         navigate('/catalog/');
//     };

//     const handleIncrement = (index) => {
//         updateQuantity(index, cartItems[index].quantity + 1);
//     };

//     const handleDecrement = (index) => {
//         const newQuantity = cartItems[index].quantity - 1;
//         if (newQuantity > 0) {
//             updateQuantity(index, newQuantity);
//         } else {
//             handleRemove(index);
//         }
//     };

//     return (
//         <div className="basket-card_wrapper">
//             {cartItems.length === 0 ? (
//                 <div className='wrapperr-not-product'>
//                     <div>
//                         <p className='not-product'>Ваша корзина пуста</p>
//                         <img src={notProducts} className='not-product_img' alt="No Products" />
//                     </div>
//                 </div>
//             ) : (
//                 <div className="cart_items">
//                     {cartItems.map((item, index) => (
//                         <div key={index} className="cart_item">
//                             <div className="wrapper_top">
//                                 <div className="product_photo">
//                                     {item.image ? (
//                                         <img src={item.image} className="img" alt="Product" />
//                                     ) : (
//                                         <img src={defaultImg} className="img" alt="Default" />
//                                     )}
//                                 </div>
//                                 <div>
//                                     <div className="product_type">
//                                         <p>Тип обоев: {item.type}</p>
//                                     </div>
//                                     <p className="product_name">Название: {item.nameproduct}</p>
//                                 </div>
//                                 <div className="product_price_one">
//                                     <p>Цена за единицу: {item.priceProduct} руб.</p>
//                                 </div>
//                                 <div className="wrapper_btns">
//                                     <div className="btns_control_value">
//                                         <button className="btns_control" onClick={() => handleDecrement(index)}>-</button>
//                                         <div className="label_count">{item.quantity}</div>
//                                         <button className="btns_control" onClick={() => handleIncrement(index)}>+</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='bottom'>
//                                 <div className="product_price">
//                                     <p>Общая цена: {item.priceProduct * item.quantity} руб.</p>
//                                 </div>
//                                 <div className="delete">
//                                     <button onClick={() => handleRemove(index)}>
//                                         <img src={delete_btn} className="img_delete" alt="Delete" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <button onClick={handleBackToConstructor}>Перейти к конструктору</button>
//             <button onClick={handleBackToCatalog}>Перейти в каталог</button>
//         </div>
//     );
// };

// export default Cart;
