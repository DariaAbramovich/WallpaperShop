import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import defaultImg from './../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg'

import './../containers/cataloge/cataloge.scss'


const CardWrapper = styled.div`
    border-radius: 15px;
    position: relative;
    flex-direction: column;
    background-color: #FAFAFA;
    margin: 10px;
    // width: calc(25% - 30px);
    width: 280px;
    margin: 40px 0;
`;


const CardImageWrapper = styled.div`
`;
const CardImage = styled.div`
`;
const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 15px 0;
`;

const CardLink= styled(Link)`
  &:hover {
    // opacity: 0.4;
    // transition: opacity 0.4s;
    cursor: pointer;
  }
`;
const CardPhoto = styled.div`
    margin-top: -60px;
    height: 160px;
    background-color: #FAFAFA;
    border-radius: 20px 20px 0 0;
    text-align: center;
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 165px;
    padding: 14px 22px 28px;
    background-color: #FFF;
    border-radius: 0px 0px 20px 20px;
`
const CardCategory = styled(Link)`
    position: relative;
    z-index: 3;
    color: #8D8D8D;
    font-size: 17px;
`
const CardFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
const CardPrice = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3px;
    padding-left: 4px;
    color: var(--ui-dark-blue);
    font-size: 21px;
    font-weight: 600;
`
const CardBtn = styled.button`
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
const CardName = styled.div`
    font-size: 18px;
    font-weight: 400;
    transition: 0.4s;
    &:hover{
        color: var( --text-accent);
`
const AdminCard = ({id,nameproduct,  type, priceProduct, photoProduct, inStock }) =>{

    const item = {id,nameproduct,  type, priceProduct, photoProduct, inStock }
    return(
        <CardWrapper className="admin-card-wrapper">
            <CardLink to={`/detailpage/`} >
                <CardImageWrapper>
                <div className='instock'>{inStock}</div>
                    <CardImage>
                        <CardPhoto>
                        <img src={defaultImg} alt="" className='img-card'></img>
                        <div className="redatc_btns">
                           <button>редактировать</button> 
                           <button>удалить</button> 
                        </div>
                        </CardPhoto>
                       
                    </CardImage>
                  
                </CardImageWrapper>
             </CardLink>
                
                <CardDescription className="admin-card-desc">
                <CardLink to={`/detailpage/`}>
                    <CardCategory>
                       {type}
                    </CardCategory>
                    <CardName >
                   {nameproduct}
                    </CardName>
                </CardLink>
                    <CardFooter>
                        <CardPrice>
                            {priceProduct} руб
                        </CardPrice>
                    </CardFooter>
                </CardDescription>
        </CardWrapper>
       
    )
}
export default AdminCard;