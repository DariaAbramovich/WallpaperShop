
import React from "react";
import styled from "styled-components";
import basket from '../assets/icon/basket2.png'
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

const BtnToDetale = ({onClick,itemsCount }) =>{
   
    return(
        <div onClick={onClick}>
            <div>{itemsCount}</div>
            <Link to={`/detailpage/`} >Подробнее</Link>
        </div>
    )
}
const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
  });
export default  connect(mapStateToProps) (BtnToDetale);

