// Constructor.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import grey from './path/to/grey.png'; // Adjust the paths accordingly
import persic from './path/to/persic.png';
import perple from './path/to/perple.png';
import green from './path/to/green.png';
import darkgreen from './path/to/darkgreen.png';
import darkYellow from './path/to/darkYellow.png';
import darkBlue from './path/to/darkBlue.png';
import blue1 from './path/to/blue1.png';
import beige from './path/to/beige.png';
import colibri from './path/to/colibri.png';
import spa50 from './path/to/spa50.png';
import spa80 from './path/to/spa80.png';
import sacura from './path/to/sacura.png';
import star from './path/to/star.png';
import horse from './path/to/horse.png';
import willow50 from './path/to/willow50.png';
import spring100 from './path/to/spring100.png';
import spring48 from './path/to/spring48.png';
import spring64 from './path/to/spring64.png';
import spring94 from './path/to/spring94.png';
import None from './path/to/none.png'; // Assuming you have an image for None, otherwise just handle it as a string

const PRICES = {
    paper: 20, 
    vinyl: 40,
    nonwowen: 34,
};

const BASE_PATTERN_PRICE = 10; // Base price increase for any selected pattern
const COLIBRI_PATTERN_PRICE = 15; // Additional price for colibri pattern

const Constructor = ({ addToCart }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [width, setWidth] = useState('');
    const [wallpaperType, setWallpaperType] = useState('paper'); 
    const [price, setPrice] = useState(0);
    const history = useHistory();

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
    };

    const handleWidthChange = (e) => {
        const newWidth = e.target.value;
        setWidth(newWidth);
        calculatePrice(newWidth, wallpaperType, selectedImage);
    };

    const handleWallpaperTypeChange = (e) => {
        const newType = e.target.value;
        setWallpaperType(newType);
        calculatePrice(width, newType, selectedImage);
    };

    const calculatePrice = (width, type, image) => {
        const numericWidth = parseFloat(width);
        if (!isNaN(numericWidth)) {
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
            color: selectedColor,
            image: selectedImage,
            width,
            wallpaperType,
            price
        };
        addToCart(order); // Add order to cart
        history.push('/cart'); // Navigate to cart page
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
                <h1 className='wrapp_title'>Конструктор - создание персональных обоев</h1>
                <div className='constructor_body'>
                    <div className='constructor_result'>
                        <div className='result' style={resultStyle}>
                            {selectedColor && <p>Selected Color: {selectedColor}</p>}
                        </div>
                    </div>
                    <div className='constructor_param'>
                        <p className='param_title'>Выберите цвет:</p>
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
                        <p className='param_title'>Выберите рисунок:</p>
                        <div className='param_image'>
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
                        <p className='param_title'>Выберите тип обоев:</p>
                        <select value={wallpaperType} onChange={handleWallpaperTypeChange}>
                            <option value='paper'>Бумажные</option>
                            <option value='vinyl'>Виниловые</option>
                            <option value='nonwowen'>Флизелиновые</option>
                        </select>
                        <p className='param_title'>Введите ширину (в метрах):</p>
                        <input
                            type='number'
                            value={width}
                            onChange={handleWidthChange}
                            placeholder='Введите ширину'
                        />
                        <p>Цена: {price} руб.</p>
                        <button onClick={handleOrder}>Заказать</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Constructor;
