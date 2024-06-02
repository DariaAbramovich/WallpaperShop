import './constructor.scss';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import React, { useState } from 'react';
import beige from './../../assets/image/constructor/colors/bejevi.jpg';
import black from './../../assets/image/constructor/colors/black.jpg';
import blue from './../../assets/image/constructor/colors/blue.jpg';
import blue1 from './../../assets/image/constructor/colors/blue1.jpg';
import darkBlue from './../../assets/image/constructor/colors/dark-blue.jpg';
import darkYellow from './../../assets/image/constructor/colors/dark-yelow.jpg';
import darkgreen from './../../assets/image/constructor/colors/dark-green.jpg';
import green from './../../assets/image/constructor/colors/green.jpg';
import perple from './../../assets/image/constructor/colors/perple.jpg';
import persic from './../../assets/image/constructor/colors/persic.jpg';
import white from './../../assets/image/constructor/colors/white.jpg';
import grey from './../../assets/image/constructor/colors/grey.jpg';
import colibri from './../../assets/image/constructor/picture/icons8-колибри-64.png'
import sacura from './../../assets/image/constructor/picture/icons8-сакура-94.png'
import spa80 from './../../assets/image/constructor/picture/icons8-спа-цветок-80.png'
import spa50 from './../../assets/image/constructor/picture/icons8-цветок-50.png'

import star from './../../assets/image/constructor/picture/icons8-constellation-58.png'
import horse from './../../assets/image/constructor/picture/icons8-knight-50.png'
import willow50 from './../../assets/image/constructor/picture/icons8-willow-50.png'
import spring100 from './../../assets/image/constructor/picture/icons8-весна-100.png'
import spring48 from './../../assets/image/constructor/picture/icons8-весна-48.png'
import spring64 from './../../assets/image/constructor/picture/icons8-весна-64.png'
import spring94 from './../../assets/image/constructor/picture/icons8-весна-94.png'
import None from './../../assets/image/constructor/picture/icons8-нет-64.png'


const PRICES = {
    paper: 20,
    vinil: 40,
    nonwowen: 34,
};
const BASE_PATTERN_PRICE = 10;
const COLIBRI_PATTERN_PRICE = 15;
export const Constructor = ({ addToCart }) => {
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedImage, setSelectedImage] = useState('');
    const [width, setWidth] = useState('');
    const [wallpaperType, setWallpaperType] = useState('');
    const [price, setPrice] = useState(0);
    const [isWidthValid, setIsWidthValid] = useState(false);
    const navigate = useNavigate();

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const handleImageSelection = (image) => {
        if (image === 'none') {
            setSelectedImage('');
            calculatePrice(width, wallpaperType, '');
        } else {
            setSelectedImage(image);
            calculatePrice(width, wallpaperType, image);
        }
        console.log("image", image)
    };

    const handleWidthChange = (e) => {
        const newWidth = e.target.value;
        setWidth(newWidth);
        calculatePrice(newWidth, wallpaperType, selectedImage);
        setIsWidthValid(newWidth !== '');
    };

    const handleWallpaperTypeChange = (e) => {
        const newType = e.target.value;
        setWallpaperType(newType);
        calculatePrice(width, newType, selectedImage);
    };

    const calculatePrice = (width, type, image) => {
        const numericWidth = parseFloat(width);
        if (!isNaN(numericWidth) && type) {
            const basePrice = numericWidth * PRICES[type];
            const patternPrice = image ? BASE_PATTERN_PRICE : 0;
            const colibriPrice = image === colibri ? COLIBRI_PATTERN_PRICE : 0;
            setPrice(basePrice + patternPrice + colibriPrice);
        } else {
            setPrice(0);
        }
    };

    const handleOrder = () => {
        const order = {
            nameproduct: 'Individuai wallpaper',
            colorProduct: selectedColor,
            img: resultStyle,
            image: selectedImage,
            widthProduct: width,
            type: wallpaperType,
            priceProduct: price
        };
        if (isWidthValid && wallpaperType) {
            addToCart(order); // Add order to cart
            navigate('/cart/')
        } else {
            alert('Пожалуйста, выберите тип обоев и введите ширину перед оформлением заказа.');
        }
    };

    const resultStyle = {
        backgroundColor: selectedColor,
        backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
        backgroundRepeat: 'repeat',
        backgroundSize: '70px'
    };

    return (
        <>
            <div className='const_wrapper'>
                <h1 className='wrapp_title'><span className='wrapp_title_span'>Конструктор</span> - создание персональных обоев</h1>
                <div className='constructor_body'>
                    <div className='constructor_result'>
                        <div className='result' style={resultStyle}>
                            {selectedColor && <p>Selected Color: {selectedColor}</p>}
                        </div>
                    </div>
                    <div className='constructor_param'>
                        <p className='param_title'>Выберете цвет:</p>
                        <div className='param_color'>
                            <div className='color-item_b' onClick={() => handleColorSelection('black')}>b</div>
                            <div className='color-item_w' onClick={() => handleColorSelection('white')}>w</div>
                            <div onClick={() => handleColorSelection('grey')}><img src={grey} className='color-item_gr' alt='grey' /></div>
                            <div className='color-item_per' onClick={() => handleColorSelection('peachpuff')}>per</div>
                            <div onClick={() => handleColorSelection('#eeaaff')}><img src={perple} className='color-item_gr' alt='violet' /></div>
                            <div onClick={() => handleColorSelection('green')}><img src={green} className='color-item_gr' alt='green' /></div>
                            <div onClick={() => handleColorSelection('darkgreen')}><img src={darkgreen} className='color-item_gr' alt='darkgreen' /></div>
                            <div className='color-item_ye' onClick={() => handleColorSelection('#dcd629')}>ye</div>
                            <div onClick={() => handleColorSelection('#000366')}><img src={darkBlue} className='color-item_gr' alt='darkBlue' /></div>
                            <div className='color-item_bl_1' onClick={() => handleColorSelection('#77cbff')}>bl</div>
                            <div className='color-item_bl' onClick={() => handleColorSelection('#ccebff')}>bl</div>
                            <div onClick={() => handleColorSelection('beige')}><img src={beige} className='color-item_gr' alt='beige' /></div>
                        </div>
                        <p className='param_title'>Выберете рисунок:</p>
                        <div className='param_imge'>
                            <div onClick={() => handleImageSelection(colibri)}><img className='img_picture' src={colibri} alt='colibri' /></div>
                            <div onClick={() => handleImageSelection(spa50)}><img className='img_picture' src={spa50} alt='spa50' /></div>
                            <div onClick={() => handleImageSelection(spa80)}><img className='img_picture' src={spa80} alt='spa80' /></div>
                            <div onClick={() => handleImageSelection(sacura)}><img className='img_picture' src={sacura} alt='sacura' /></div>
                            <div onClick={() => handleImageSelection(star)}><img className='img_picture' src={star} alt='star' /></div>
                            <div onClick={() => handleImageSelection(horse)}><img className='img_picture' src={horse} alt='horse' /></div>
                            <div onClick={() => handleImageSelection(willow50)}><img className='img_picture' src={willow50} alt='willow50' /></div>
                            <div onClick={() => handleImageSelection(spring100)}><img className='img_picture' src={spring100} alt='spring100' /></div>
                            <div onClick={() => handleImageSelection(spring48)}><img className='img_picture' src={spring48} alt='spring48' /></div>
                            <div onClick={() => handleImageSelection(spring64)}><img className='img_picture' src={spring64} alt='spring64' /></div>
                            <div onClick={() => handleImageSelection(spring94)}><img className='img_picture' src={spring94} alt='spring94' /></div>
                            <div onClick={() => handleImageSelection('none')}><img className='img_picture' src={None} alt='None' /></div>
                        </div>
                        <div className='choose_type'>
                            <p className='param_title'>Выберите тип обоев:</p>
                            <select className='change_type_prod' value={wallpaperType} onChange={handleWallpaperTypeChange}>
                                <option value=''>Не выбрано</option>
                                <option value='paper'>Бумажные</option>
                                <option value='vinil'>Виниловые</option>
                                <option value='nonwowen'>Флизилиновые</option>
                            </select>
                        </div>
                        <div className='choose_width'>
                            <p className='param_title'>Выберите ширину обоев:</p>
                            <select className='change_type_prod' value={width} onChange={handleWidthChange}>
                                <option value=''>Не выбрано</option>
                                <option value='0.53'>0.53</option>
                                <option value='1.6'>1.6</option>
                            </select>
                        </div>
                        <div className='bottom_constructor'>
                            <p className='price_item'>Цена: {price.toFixed(2)} руб.</p>
                            <button className='constr_toOrder' onClick={handleOrder}>Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
