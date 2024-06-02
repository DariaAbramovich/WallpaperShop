

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';  
import { addItem } from '../redux/cart/cart.actions';
import translate from 'translate';

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
    width: 280px;
    margin: 40px 0;
`;

const ProdCardImageWrapper = styled.div``;

const ProdCardImage = styled.div``;

const ProdCardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 15px 0;
`;

const ProdCardLink = styled(Link)`
  &:hover {
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
`;

const ProdCardCategory = styled(Link)`
    position: relative;
    z-index: 3;
    color: #8D8D8D;
    font-size: 17px;
`;

const ProdCardFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
`;

const ProdCardPrice = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3px;
    padding-left: 4px;
    color: var(--ui-dark-blue);
    font-size: 21px;
    font-weight: 600;
`;

export const ProdCardBtn = styled.button`
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
    transition: opacity 0.4s ease-in;

    &:hover {
        opacity: 0.8;
    }
`;

const ProdCardName = styled.div`
    font-size: 18px;
    font-weight: 400;
    transition: 0.4s;
    &:hover {
        color: var(--text-accent);
    }
`;
const Card = ({
    id, nameproduct, article, type, priceProduct, photoProduct, inStock,
    describeProduct, baseProduct, collectionProduct, appointment, colorProduct,
    drawingProduct, themeDrawing, dockingProduct, widthProduct, manufacture,
    country, surfaceProduct, stateProduct, addItem, addToCart, user, language 
}) => {
    const [translatedFields, setTranslatedFields] = useState({
        nameproduct, article, type, describeProduct, baseProduct, collectionProduct,
        appointment, colorProduct, drawingProduct, themeDrawing, dockingProduct,
        widthProduct, manufacture, country, surfaceProduct, stateProduct
    });
    const [modalActive, setModalActive] = useState(false);

    const translateField = async (field, text) => {
        if (/[\u0400-\u04FF]+/.test(text)) {  // Check if text contains Cyrillic characters
            const translatedText = await translate(text, { to: 'en' });
            setTranslatedFields(prevState => ({
                ...prevState,
                [field]: translatedText
            }));
        }
    };

    useEffect(() => {
        Object.keys(translatedFields).forEach(field => {
            translateField(field, translatedFields[field]);
        });
    }, []);

    const handleOrder = () => {
        const order = {
            id, nameproduct: translatedFields.nameproduct, article: translatedFields.article,
            type: translatedFields.type, priceProduct, photoProduct, inStock, 
            describeProduct: translatedFields.describeProduct, baseProduct: translatedFields.baseProduct,
            collectionProduct: translatedFields.collectionProduct, appointment: translatedFields.appointment,
            colorProduct: translatedFields.colorProduct, drawingProduct: translatedFields.drawingProduct,
            themeDrawing: translatedFields.themeDrawing, dockingProduct: translatedFields.dockingProduct,
            widthProduct: translatedFields.widthProduct, manufacture: translatedFields.manufacture,
            country: translatedFields.country, surfaceProduct: translatedFields.surfaceProduct,
            stateProduct: translatedFields.stateProduct, addItem 
        };
        addToCart(order); 
    };

    const navigate = useNavigate();
    const toLogin = () => {
        const confirmed = window.confirm('Вы не вошли в систему. Хотите продолжить?');
        if (confirmed) {
            navigate('/login/');
        }
    };

    return (
        <div>
            <ProdCardWrapper>
                <ProdCardLink to={`/detailpage/`}>
                    <ProdCardImageWrapper>
                        {translatedFields.stateProduct === 'Новинка' && (
                            <div className='instocks_label'>{translatedFields.stateProduct}</div>
                        )}
                        <ProdCardImage>
                            <ProdCardPhoto>
                                <img className='img-card-ctlg' src={`http://localhost/api/uploads/${photoProduct}`} alt={photoProduct} />
                            </ProdCardPhoto>
                        </ProdCardImage>
                    </ProdCardImageWrapper>
                </ProdCardLink>
                
                <ProdCardDescription>
                    <ProdCardLink to={`/detailpage/`}>
                        <ProdCardCategory>
                            {translatedFields.type}
                        </ProdCardCategory>
                        <ProdCardName>
                            {translatedFields.nameproduct}
                        </ProdCardName>
                    </ProdCardLink>
                    <ProdCardFooter>
                        <ProdCardPrice>
                            {priceProduct} руб
                        </ProdCardPrice>
                        <ProdCardBtn>
                            <img src={plas} onClick={handleOrder} alt=""/>
                        </ProdCardBtn>
                    </ProdCardFooter>
                    <button className="moreinfo-btn-prod" onClick={() => setModalActive(true)}>More info
                        <img src={toMore} className="img_toMore" alt=""/>
                    </button>
                </ProdCardDescription>
            </ProdCardWrapper>

            <Modal 
                active={modalActive} 
                setActive={setModalActive} 
                nameprod={translatedFields.nameproduct} 
                type={translatedFields.type} 
                id={id}  
                article={translatedFields.article}  
                priceProduct={priceProduct} 
                photoProduct={photoProduct} 
                inStock={inStock} 
                describeProduct={translatedFields.describeProduct} 
                baseProduct={translatedFields.baseProduct} 
                collectionProduct={translatedFields.collectionProduct} 
                appointment={translatedFields.appointment} 
                colorProduct={translatedFields.colorProduct} 
                drawingProduct={translatedFields.drawingProduct} 
                themeDrawing={translatedFields.themeDrawing} 
                dockingProduct={translatedFields.dockingProduct} 
                widthProduct={translatedFields.widthProduct} 
                manufacturer={translatedFields.manufacture} 
                country={translatedFields.country} 
                surfaceProduct={translatedFields.surfaceProduct} 
                stateProduct={translatedFields.stateProduct}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Card);

