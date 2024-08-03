
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './edit.scss';
import defaultImg from './../../../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg';

const EditProductForm = ({ productId, Photo ,onClose }) => {
    const [productData, setProductData] = useState({
        NameProduct: '',
        Article: '',
        DescribeProduct: '',
        PriceProduct: 0,
        TypeProduct: '',
        BaseProduct: '',
        CollectionProduct: '',
        Appointment: '',
        ColorProduct: '',
        DrawingProduct: '',
        ThemeDrawing: '',
        DockingProduct: '',
        WidthProduct: '',
        Manufacturer: '',
        Country: '',
        SurfaceProduct: '',
        InStock: false,
        StateProduct: '',
       
    });

    useEffect(() => {
        getProduct();
    }, [productId]);

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost/api/product_correct.php?id=${productId}`);
            setProductData(response.data);
        } catch (error) {
            console.error('Ошибка получения данных товара:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'PriceProduct' && !/^\d+(\.\d{0,2})?$/.test(value)) {
            return; // Не обновляем состояние, если ввод некорректен
        }
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost/api/product_correct.php?id=${productId}`, productData);
            console.log(response.data);
            onClose();
        } catch (error) {
            console.error('Ошибка при редактировании товара:', error);
        }
    };

    return (
        <form className="wrapper_modalEdit" onSubmit={handleSubmit}>
            <div className='modalEdit_content'>
                <div className='modalEdit_title'>Редактирование данных</div>
                {/* <img className="modalEdit_img" src={`http://localhost/api/uploads/${Photo}`} alt={Photo} /> */}
                <div>
                    <label>Название:</label>
                    <input type="text" name="NameProduct" value={productData.NameProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Артикль:</label>
                    <input type="text" name="Article" value={productData.Article} onChange={handleChange} />
                </div>
                <div>
                    <label>Описание:</label>
                    <input type="text" name="DescribeProduct" value={productData.DescribeProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Цена:</label>
                    {/* <input type="number" name="PriceProduct" value={productData.PriceProduct} onChange={handleChange} /> */}
                
                                <input 
                    type="number" 
                    name="PriceProduct" 
                    value={productData.PriceProduct} 
                    onChange={handleChange} 
                    step="0.01" 
                    max="999.99" 
                    maxLength="5" 
                />
                </div>
                <div>
                    <label>Тип:</label>
                    <input type="text" name="TypeProduct" value={productData.TypeProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Основа:</label>
                    <input type="text" name="BaseProduct" value={productData.BaseProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Коллекция:</label>
                    <input type="text" name="CollectionProduct" value={productData.CollectionProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Помещение:</label>
                    <input type="text" name="Appointment" value={productData.Appointment} onChange={handleChange} />
                </div>
                <div>
                    <label>Цвет:</label>
                    <input type="text" name="ColorProduct" value={productData.ColorProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Рисунок:</label>
                    <input type="text" name="DrawingProduct" value={productData.DrawingProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Тема рисунка:</label>
                    <input type="text" name="ThemeDrawing" value={productData.ThemeDrawing} onChange={handleChange} />
                </div>
                <div>
                    <label>Стыковка:</label>
                    <input type="text" name="DockingProduct" value={productData.DockingProduct} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Производитель:</label>
                    <input type="text" name="Manufacturer" value={productData.Manufacturer} onChange={handleChange} />
                </div>
                <div>
                    <label>Страна:</label>
                    <input type="text" name="Country" value={productData.Country} onChange={handleChange} />
                </div>
                <div>
                    <label>Поверхность:</label>
                    <input type="text" name="SurfaceProduct" value={productData.SurfaceProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>В наличии:</label>
                    <input type="checkbox" name="InStock" checked={productData.InStock} onChange={handleChange} />
                </div>
                <div>
                    <label>Метка:</label>
                    <input type="text" name="StateProduct" value={productData.StateProduct} onChange={handleChange} />
                </div>
                <button className='save-edit_btn' type="submit">Сохранить</button>
                <button className='close-edit_btn' type="button" onClick={onClose}>Отмена</button>
            </div>
        </form>
    );
};

export default EditProductForm;
