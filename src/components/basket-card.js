// import React from "react";
// import styled from "styled-components";
// import '../containers/basket/basket.scss';
// import delete_btn from '../assets/icon/delete.png';
// import { connect } from 'react-redux';
// import { removeItemById } from '../redux/cart/cart.actions';

// const BasketCard = ({item, counter, removeItem }) => {
//     const { id,nameproduct, type, priceProduct, photoProduct, inStock ,quantity} = item;
    
//     return (
//         <>
//             <div className="basket-card_wrapper">
//                 <div className="wrapper_top">
//                     <div className="product_hoto">
//                         <img src={defaultImg} className="img" />
//                     </div>

//                     <div className="product_name">
//                         <div className="product_type">
//                             {type}
//                         </div>
//                        { nameproduct}
//                     </div>

//                     <div className="product_price">
//                          {priceProduct} руб
//                     </div>
//                     <div className="wrapper_btns">
//                         <div className="btns_control_value">
//                             {/* <button  className="btns_control">+</button>
//                             <p className="label_count">{quantity}</p>
//                             <button  className="btns_control">-</button> */}
//                         </div>
//                     </div>

//                 </div>
//                 <div className="delete">
//                     <div>
//                     </div>
//                     <button onClick={() => removeItem(item.id)}><img src={delete_btn} className="img_delete"></img></button>
//                 </div>

//             </div>
//         </>
//     )

// }

// const mapDispatchToProps = dispatch => ({
//     removeItem: id => dispatch(removeItemById(id))
//   });

// export default connect(null, mapDispatchToProps) (BasketCard);