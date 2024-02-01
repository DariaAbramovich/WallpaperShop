import './addProduct.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import React, { useState } from 'react';

const AddProductComponent = () => {
    const [inputs, setInputs] = useState({});

    const [pName, setpName] = useState('');
    const [pArticle, setpArticle] = useState('');
    const [pDescribe, setpDescribe] = useState('');
    const [pPrice, setpPrice] = useState('');
    const [pPhoto, setpPhoto] = useState('');
    const [pType, setpType] = useState('');
    const [pBase, setpBase] = useState('');
    const [pCollection, setpCollection] = useState('');
    const [pAppointment, setpAppointment] = useState('');
    const [pColor, setpColor] = useState('');
    const [pDrowing,  setpDrowing] = useState('');
    const [pThemeDrawing, setpThemeDrawing] = useState('');
    const [pDocking, setpDocking] = useState('');
    const [pWidth, setpWidth] = useState('');
    const [pManufacturer, setpManufacturer] = useState('');
    const [pCountry, setpCountry] = useState('');
    const [pShine, setpShine] = useState('');
    const [pSurface, setpSurface] = useState('');
    const [pInStock, setpInStock] = useState('');
    const [pState, setpState] = useState('');

    const uploadProduct = async () =>{
        const formData = new FormData();
        formData.append('pName', pName);
        formData.append('pArticle', pArticle);
        formData.append('pDescribe', pDescribe);
        formData.append('pPrice', pPrice );
        formData.append('pPhoto', pPhoto);
        formData.append('pType', pType);
        formData.append('pBase', pBase);
        formData.append('pCollection', pCollection);
        formData.append('pAppointment', pAppointment);
        formData.append('pColor',pColor );
        formData.append('pDrowing', pDrowing);

       
        formData.append('pThemeDrawing', pThemeDrawing);
        formData.append('pDocking', pDocking);
        formData.append('pWidth', pWidth);
        formData.append('pManufacturer', pManufacturer);
        formData.append('pCountry', pCountry);
        formData.append('pShine',pShine );
        formData.append('pSurface',pSurface );
        formData.append('pInStock', pInStock );
        formData.append('pState', pState);

        const responce = await axios.post("http://localhost/api/product.php", formData)
        // if(responce.data.success){
        //     // setMessage(responce.data.success);
            alert("ok")
        //     console.log(responce.data.success)
           
        // }

    //    (await axios.post("http://localhost/api/product.php", formData)).
    //    then(function(responce){
    //     console.log(responce.data);
    //     alert("ok")
    //    })

    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await uploadProduct();
     
    }

    return (
        <>
            <div className="wrapper-addedProduct">
                <h3 className='addedProduct-title'>Добавить новый продукт</h3>
                <form className='addedProduct-form' onSubmit={handleSubmit}>

                    <div className='addedProduct-form__item'>
                        <label>Имя продукта</label>
                        <input type='text' placeholder='Введите название продукта' className='' onChange={(e) => setpName(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Артикул</label>
                        <input type='text' placeholder='Введите артикул' className='' onChange={(e) => setpArticle(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Описание</label>
                        <input type='text' placeholder='Введите описание ' className='' onChange={(e) => setpDescribe(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Цена</label>
                        <input type='text' placeholder='Введите цену' className='' onChange={(e) => setpPrice(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Фото</label>
                        <input type='file' className='' onChange={(e) => setpPhoto(e.target.files[0])}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Тип обоев</label>
                        <input type='text' placeholder='Введите тип продукта' className='' onChange={(e) => setpType(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Основа</label>
                        <input type='text' placeholder='Введите основу обоев' className='' onChange={(e) => setpBase(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Коллекция</label>
                        <input type='text' placeholder='Введите коллекцию' className='' onChange={(e) => setpCollection(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Помещение</label>
                        <input type='text' placeholder='Введите помещение' className='' onChange={(e) => setpAppointment(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Цвет</label>
                        <input type='text' placeholder='Введите цвет' className='' onChange={(e) =>  setpColor(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Наличие рисунка</label>
                        <input type='text' placeholder='наличие рисунка' className='' onChange={(e) => setpDrowing(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Тема рисунка</label>
                        <input type='text' placeholder='Введите тему рисунка' className='' onChange={(e) => setpThemeDrawing(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Тип стыковки</label>
                        <input type='text' placeholder='Введите тип стыковки' className='' onChange={(e) => setpDocking(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Ширина</label>
                        <input type='number' placeholder='Введите длинну' className='' onChange={(e) => setpWidth(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Производитель</label>
                        <input type='text' placeholder='Введите производителя' className='' onChange={(e) => setpManufacturer(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Страна изготовитель</label>
                        <input type='text' placeholder='Введите страну изготовителя' className='' onChange={(e) => setpCountry(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Наличие блеска</label>
                        <input type='text' placeholder='Input name product' className='' onChange={(e) => setpShine(e.target.value)}/>
                    </div>
                    <div className='addedProduct-form__item'>
                        <label>Тип поверхности</label>
                        <input type='text' placeholder='Input name product' className='' onChange={(e) => setpSurface(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>В наличии</label>
                        <input type='text' placeholder='состояние продукта' className='' onChange={(e) => setpInStock(e.target.value)}/>
                    </div>

                    <div className='addedProduct-form__item'>
                        <label>Состояние продукта</label>
                        <input type='text' placeholder='акция \ новинка \ популярное' className='' onChange={(e) => setpState(e.target.value)}/>
                    </div>

                    <div>
                        <button type="submit" className='btn-form'>
                            Отправить 
                        </button>
                        <button type='reset' className='btn-form'>
                           Очистить форму
                        </button>
                    </div>
                </form>
            </div>



        </>
    )
}
export default AddProductComponent;
