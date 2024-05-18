
import React from "react";
import styled from "styled-components";
import basket from '../assets/icon/basket2.png'
import { connect } from 'react-redux';

const CardBtn = ({onClick,itemsCount }) =>{
   
    return(
        <div onClick={onClick}>
            <img src={basket} className="basket-icon"/>
            <div className="basket__count">{itemsCount}</div>
        </div>
    )
}
const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
  });
export default connect(mapStateToProps) (CardBtn);

// const mapStateProdToProps = state => ({
//     itemsCount: state.delate.delatetReducer.reduce((acc, item) => acc += item.quantity, 0)
//   });
// connect(mapStateProdToProps)