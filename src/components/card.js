import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';  
import { addItem } from '../redux/cart/cart.actions';

import plas from './../assets/icon/Plus.png'
import defaultImg from './../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg'
import toMore from './../assets/icon/arrov-right.svg'
import './../containers/cataloge/cataloge.scss'
import Modal from "./modal";


const ProdCardWrapper = styled.div`
    border-radius: 15px;
    position: relative;
    flex-direction: column;
    background-color: #FAFAFA;
    margin: 10px;
    // width: calc(25% - 30px);
    width: 280px;
    margin: 40px 0;
`;


const ProdCardImageWrapper = styled.div`
`;
const ProdCardImage = styled.div`
`;
const ProdCardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 15px 0;
`;


// const CardLink = ({onClick,itemsCount })=>{
//     return(
//        <Link to={`/detailpage/`} onClick={onClick}>
             
//        </Link>
//     )
// }
const ProdCardLink= styled(Link)`
  &:hover {
    // opacity: 0.4;
    // transition: opacity 0.4s;
    cursor: pointer;
  }
`;
const ProdCardPhoto = styled.div`
    margin-top: -60px;
    height: 160px;
    background-color: #FAFAFA;
    border-radius: 20px 20px 0 0;
    text-align: center;
`;

const ProdCardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 202px;
    padding: 14px 22px 28px;
    background-color: #FFF;
    border-radius: 0px 0px 20px 20px;
`
const ProdCardCategory = styled(Link)`
    position: relative;
    z-index: 3;
    color: #8D8D8D;
    font-size: 17px;
`
const ProdCardFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
const ProdCardPrice = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3px;
    padding-left: 4px;
    color: var(--ui-dark-blue);
    font-size: 21px;
    font-weight: 600;
`
const ProdCardBtn = styled.button`
    position: relative; 
    z-index: 3;
    width: 48px;
    height: 48px;
    background-color: var(--ui-dark-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    transition:  opacity 0.4s ease-in;

    &:hover{
        opacity: 0.8;
`
const ProdCardName = styled.div`
    font-size: 18px;
    font-weight: 400;
    transition: 0.4s;
    &:hover{
        color: var( --text-accent);
`
const Card = ({id,nameproduct, article, type, priceProduct, photoProduct, inStock,describeProduct, baseProduct,collectionProduct,appointment,colorProduct,drawingProduct,  themeDrawing,dockingProduct, widthProduct,manufacture,country,surfaceProduct,stateProduct, addItem }) =>{
    const [modalActive, setModalActive] = useState(false)
    const item = {id,nameproduct,article, type, priceProduct, photoProduct, inStock,describeProduct, baseProduct,collectionProduct,appointment,colorProduct,drawingProduct,  themeDrawing,dockingProduct,widthProduct,manufacture,country,surfaceProduct,stateProduct, addItem }
    return(
        <div>
        <ProdCardWrapper >
            <ProdCardLink to={`/detailpage/`} >
                <ProdCardImageWrapper>
                <div className='instocks_label'>{stateProduct}</div>
                    <ProdCardImage>
                        <ProdCardPhoto>
                        <img src={defaultImg} alt="" className='img-card'></img>
                        </ProdCardPhoto>
                    </ProdCardImage>
                </ProdCardImageWrapper>
             </ProdCardLink>
                
                <ProdCardDescription>
                <ProdCardLink to={`/detailpage/`}>
                    <ProdCardCategory>
                       {type}
                    </ProdCardCategory>
                    <ProdCardName >
                   {nameproduct}
                    </ProdCardName>
                </ProdCardLink> 
                    <ProdCardFooter>
                        <ProdCardPrice>
                            {priceProduct} руб
                        </ProdCardPrice>
                        <ProdCardBtn onClick={() => addItem(item)}>
                        <img src={plas} alt=""/>
                        </ProdCardBtn>
                    </ProdCardFooter>
                    <button className="moreinfo-btn-prod" onClick={()=>setModalActive(true)}>More info
                    <img src={toMore} className="img_toMore"/>
                    </button>
                </ProdCardDescription>
        </ProdCardWrapper>
         

        <Modal active={modalActive} setActive={setModalActive} nameprod={nameproduct} type={type} id={id}  article = {article}  priceProduct={priceProduct} photoProduct={photoProduct} inStock={inStock} describeProduct={describeProduct} baseProduct={baseProduct} collectionProduct={collectionProduct} appointment={appointment} colorProduct={colorProduct} drawingProduct={drawingProduct} themeDrawing={themeDrawing} dockingProduct={dockingProduct} widthProduct={widthProduct} manufacturer={manufacture} country={country} surfaceProduct={surfaceProduct} stateProduct={stateProduct}/>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null,mapDispatchToProps) (Card);