// import React, {useEffect, useState} from "react";
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import './addProduct.scss'
// import { FaInfoCircle } from 'react-icons/fa';

// const AddProductComponent = () => {

//     const [inputs,setInputs] = useState({})
//     const [errors, setErrors] = useState({});
//     const [isFormValid, setIsFormValid] = useState(false);
//     const [attemptedSubmit, setAttemptedSubmit] = useState(false);
//     const fieldLabels = {
//         name: 'Имя продукта',
//         article: 'Артикул',
//         decribe: 'Описание',
//         price: 'Цена',
//         typeWallPaper: 'Тип обоев',
//         baseWAallPapaper: 'Основа',
//         collectionWallPapaper: 'Коллекция',
//         room: 'Помещение',
//         color: 'Цвет',
//         isDriver: 'Наличие рисунка',
//         themeDriver: 'Тема рисунка',
//         typeStik: 'Тип стыковки',
//         widthWallPaper: 'Ширина',
//         manufacturer: 'Производитель',
//         country: 'Страна изготовитель',
//         surfaceProduct: 'Поверхность',
//         isNalle: 'В наличии',
//         stateProduct: 'Состояние продукта'
//     };
//     const tooltips = {
//         name: 'Введите название продукта',
//         article: 'Введите артикул продукта',
//         decribe: 'Введите описание продукта',
//         price: 'Введите цену продукта (от 0 руб.)',
//         typeWallPaper: 'Введите тип обоев : Виниловые обои / Флизилиновые обои / Бумажные обои)',
//         baseWAallPapaper: 'Введите основу обоев : Бумажная, Виниловая, Флизелиновая)',
//         collectionWallPapaper: 'Введите коллекцию обоев',
//         room: 'Введите помещение, для которого предназначены обои: кабинет, кухня, детская, универсальные',
//         color: 'Введите цвет обоев',
//         isDriver: 'Укажите наличие рисунка на обоях (да/нет)',
//         themeDriver: 'Введите тему рисунка на обоях',
//         typeStik: 'Введите тип стыковки обоев: Прямая, Вертикальная, Со смещением',
//         widthWallPaper: 'Введите ширину обоев (от 1м до 15м)',
//         manufacturer: 'Введите производителя обоев',
//         country: 'Введите страну изготовителя обоев',
//         surfaceProduct: 'Введите поверхность продукта: Ровная, Тиснение, Рельеф',
//         isNalle: 'Продукт в наличии? Да/Нет',
//         stateProduct: 'Укажите состояние продукта: Акция / Новинка / Популярное'
//     };

//     const navigate = useNavigate()

//     useEffect(() => {
//         if (attemptedSubmit) {
//             validateForm();
//         }
//     }, [inputs, attemptedSubmit]);

   
//     const validateForm = () => {
//         const requiredFields = Object.keys(fieldLabels);
//         const newErrors = {};
//         requiredFields.forEach(field => {
//             if (!inputs[field]) {
//                 newErrors[field] = 'Это поле обязательно для заполнения';
//             }
//         });
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     }
//     const handleCange = (e) =>{
//         const name = e.target.name;
//         const value = e.target.value;
//         setInputs(values => ({...values, [name]:value}))
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setAttemptedSubmit(true);
//         if (validateForm()) {
//             axios.post('http://localhost/api/product.php', inputs)
//                 .then(function (response) {
//                     console.log(response.data);
//                     console.log(inputs);
//                     alert("Добавлено!");
//                     navigate('/admin:cataloge/');
//                 });
//         }
//     }
//     const fields = Object.keys(fieldLabels);
   
//     return (
//         <>
//             <div className="wrapper-addedProduct">
//                 <h3 className='addedProduct-title'>Добавить новый продукт</h3>
//                 <form className='addedProduct-form' onSubmit={handleSubmit}>
//                     <div className="form-columns">
//                         <div className="form-column">
//                             {fields.slice(0, 9).map((field) => (
//                                 <div key={field} className='addedProduct-form__item'>
//                                     <label>
//                                         {fieldLabels[field]}
//                                         <FaInfoCircle title={tooltips[field]} className="info-icon" />
//                                     </label>
//                                     <input
//                                         name={field}
//                                         type='text'
//                                         placeholder={`Введите ${fieldLabels[field].toLowerCase()}`}
//                                         className={errors[field] && attemptedSubmit ? 'error' : ''}
//                                         onChange={handleCange}
//                                     />
//                                     {errors[field] && attemptedSubmit && <span className="error-text">{errors[field]}</span>}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="form-column">
//                             {fields.slice(9).map((field) => (
//                                 <div key={field} className='addedProduct-form__item'>
//                                     <label>
//                                         {fieldLabels[field]}
//                                         <FaInfoCircle title={tooltips[field]} className="info-icon" />
//                                     </label>
//                                     <input
//                                         name={field}
//                                         type='text'
//                                         placeholder={`Введите ${fieldLabels[field].toLowerCase()}`}
//                                         className={errors[field] && attemptedSubmit ? 'error' : ''}
//                                         onChange={handleCange}
//                                     />
//                                     {errors[field] && attemptedSubmit && <span className="error-text">{errors[field]}</span>}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         <button type="submit" className='btn-form'>
//                             Отправить
//                         </button>
//                         <button type='reset' className='btn-form' onClick={() => setInputs({})}>
//                             Очистить форму
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }
// export default AddProductComponent;

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './addProduct.scss';
import { FaInfoCircle } from 'react-icons/fa';

const AddProductComponent = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const fieldLabels = {
        name: 'Имя продукта',
        article: 'Артикул',
        decribe: 'Описание',
        price: 'Цена',
        typeWallPaper: 'Тип обоев',
        baseWAallPapaper: 'Основа',
        collectionWallPapaper: 'Коллекция',
        room: 'Помещение',
        color: 'Цвет',
        isDriver: 'Наличие рисунка',
        themeDriver: 'Тема рисунка',
        typeStik: 'Тип стыковки',
        widthWallPaper: 'Ширина',
        manufacturer: 'Производитель',
        country: 'Страна изготовитель',
        surfaceProduct: 'Поверхность',
        isNalle: 'В наличии',
        stateProduct: 'Состояние продукта'
    };
    
    const tooltips = {
        name: 'Введите название продукта',
        article: 'Введите артикул продукта',
        decribe: 'Введите описание продукта',
        price: 'Введите цену продукта (от 0 руб.)',
        typeWallPaper: 'Введите тип обоев : Виниловые обои / Флизилиновые обои / Бумажные обои)',
        baseWAallPapaper: 'Введите основу обоев : Бумажная, Виниловая, Флизелиновая)',
        collectionWallPapaper: 'Введите коллекцию обоев',
        room: 'Введите помещение, для которого предназначены обои: кабинет, кухня, детская, универсальные',
        color: 'Введите цвет обоев',
        isDriver: 'Укажите наличие рисунка на обоях (да/нет)',
        themeDriver: 'Введите тему рисунка на обоях',
        typeStik: 'Введите тип стыковки обоев: Прямая, Вертикальная, Со смещением',
        widthWallPaper: 'Введите ширину обоев (от 1м до 15м)',
        manufacturer: 'Введите производителя обоев',
        country: 'Введите страну изготовителя обоев',
        surfaceProduct: 'Введите поверхность продукта: Ровная, Тиснение, Рельеф',
        isNalle: 'Продукт в наличии? Да/Нет',
        stateProduct: 'Укажите состояние продукта: Акция / Новинка / Популярное'
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (attemptedSubmit) {
            validateForm();
        }
    }, [inputs, attemptedSubmit]);

    const validateForm = () => {
        const requiredFields = Object.keys(fieldLabels);
        const newErrors = {};
        requiredFields.forEach(field => {
            if (!inputs[field]) {
                newErrors[field] = 'Это поле обязательно для заполнения';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAttemptedSubmit(true);
        if (validateForm()) {
            const formData = new FormData();
            Object.keys(inputs).forEach(key => {
                formData.append(key, inputs[key]);
            });
            if (selectedFile) {
                formData.append('photo', selectedFile);
            }
            axios.post('http://localhost/api/product.php', formData)
                .then(function (response) {
                    console.log(response.data);
                    alert("Добавлено!");
                    navigate('/admin:cataloge/');
                });
        }
    };

    const fields = Object.keys(fieldLabels);

    return (
        <>
            <div className="wrapper-addedProduct">
                <h3 className='addedProduct-title'>Добавить новый продукт</h3>
                <form className='addedProduct-form' onSubmit={handleSubmit}>
                    <div className="form-columns">
                        <div className="form-column">
                            {fields.slice(0, 9).map((field) => (
                                <div key={field} className='addedProduct-form__item'>
                                    <label>
                                        {fieldLabels[field]}
                                        <FaInfoCircle title={tooltips[field]} className="info-icon" />
                                    </label>
                                    <input
                                        name={field}
                                        type='text'
                                        placeholder={`Введите ${fieldLabels[field].toLowerCase()}`}
                                        className={errors[field] && attemptedSubmit ? 'error' : ''}
                                        onChange={handleChange}
                                    />
                                    {errors[field] && attemptedSubmit && <span className="error-text">{errors[field]}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="form-column">
                            {fields.slice(9).map((field) => (
                                <div key={field} className='addedProduct-form__item'>
                                    <label>
                                        {fieldLabels[field]}
                                        <FaInfoCircle title={tooltips[field]} className="info-icon" />
                                    </label>
                                    <input
                                        name={field}
                                        type='text'
                                        placeholder={`Введите ${fieldLabels[field].toLowerCase()}`}
                                        className={errors[field] && attemptedSubmit ? 'error' : ''}
                                        onChange={handleChange}
                                    />
                                    {errors[field] && attemptedSubmit && <span className="error-text">{errors[field]}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='addedProduct-form__item'>
                        <label>Фотография продукта</label>
                        <input
                            type='file'
                            name='photo'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className='btn-form'>
                            Отправить
                        </button>
                        <button type='reset' className='btn-form' onClick={() => setInputs({})}>
                            Очистить форму
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProductComponent;
