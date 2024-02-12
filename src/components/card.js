
import plas from './../assets/icon/Plus.png'
import image from './../assets/image/wallpaper/1084308_arteks_648ad4843db18.jpeg'
import React from "react";
import styled from "styled-components";
import starIcon from './../assets/icon/Plus.png';
import defaultImg from './../assets/image/wallpaper/1084306_arteks_648ad40ba35b6.jpeg'
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
    border-radius: 15px;
    position: relative;
    flex-direction: column;
    background-color: #FAFAFA;
    margin: 15px;
    // width: calc(25% - 30px);
    width: 268px;
    margin: 40px 0;
`;

const CardImageWrapper = styled.div`
    // margin-top: 50px;
    background-color: #FAFAFA;
    border-radius: 20px 20px 0 0;
    text-align: center;
`;

const CardImage = styled.div`
    margin-top: -50px;
`;


const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 15px 0;
`;

const CardLink = styled(Link)`
  &:hover {
    // opacity: 0.4;
    // transition: opacity 0.4s;
    cursor: pointer;
  }
`;
const CardPhoto = styled.div`
    margin-top: 50px;
    height: 150px;
    background-color: #FAFAFA;
    border-radius: 20px 20px 0 0;
    text-align: center;
`

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 202px;
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
const CardBtn = styled.div`
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
    transition:  opacity 0.2s ease-in;

    &:hover{
        opacity: 0.8;
`
const CardName = styled.div`
    font-size: 21px;
    font-weight: 500;
`


export const Card = ({nameproduct, photoProduct}) => (
    <CardWrapper>
        <CardLink to={`/product/`}>

            <CardImageWrapper>
                <CardImage>
                  <img src={photoProduct} alt=""/>
                </CardImage>
            </CardImageWrapper>

            <CardDescription>
                <CardCategory>
                   type
                </CardCategory>
                <CardName >
               {nameproduct}
                </CardName>
                <CardFooter>
                    <CardPrice>
                        priceProduct руб
                    </CardPrice>
                    <CardBtn>
                    <img src={plas} alt="" />
                    </CardBtn>
                </CardFooter>

            </CardDescription>

        </CardLink>
    </CardWrapper>
)