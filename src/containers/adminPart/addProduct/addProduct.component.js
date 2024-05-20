import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './addProduct.scss'
import { FaInfoCircle } from 'react-icons/fa';

const AddProductComponent = () => {
// {
//     const [inputs, setInputs] = useState({});
//     const [pName, setpName] = useState('');
//     const [pArticle, setpArticle] = useState('');
//     const [pDescribe, setpDescribe] = useState('');
//     const [pPrice, setpPrice] = useState('');
//     const [pPhoto, setpPhoto] = useState('');
//     const [pType, setpType] = useState('');
//     const [pBase, setpBase] = useState('');
//     const [pCollection, setpCollection] = useState('');
//     const [pAppointment, setpAppointment] = useState('');
//     const [pColor, setpColor] = useState('');
//     const [pDrowing,  setpDrowing] = useState('');
//     const [pThemeDrawing, setpThemeDrawing] = useState('');
//     const [pDocking, setpDocking] = useState('');
//     const [pWidth, setpWidth] = useState('');
//     const [pManufacturer, setpManufacturer] = useState('');
//     const [pCountry, setpCountry] = useState('');
//     const [pShine, setpShine] = useState('');
//     const [pSurface, setpSurface] = useState('');
//     const [pInStock, setpInStock] = useState('');
//     const [pState, setpState] = useState('');

//     const uploadProduct = async () =>{
//         const formData = new FormData();
//         formData.append('pName', pName);
//         formData.append('pArticle', pArticle);
//         formData.append('pDescribe', pDescribe);
//         formData.append('pPrice', pPrice );
//         formData.append('pPhoto', pPhoto);
//         formData.append('pType', pType);
//         formData.append('pBase', pBase);
//         formData.append('pCollection', pCollection);
//         formData.append('pAppointment', pAppointment);
//         formData.append('pColor',pColor );
//         formData.append('pDrowing', pDrowing);

       
//         formData.append('pThemeDrawing', pThemeDrawing);
//         formData.append('pDocking', pDocking);
//         formData.append('pWidth', pWidth);
//         formData.append('pManufacturer', pManufacturer);
//         formData.append('pCountry', pCountry);
//         formData.append('pShine',pShine );
//         formData.append('pSurface',pSurface );
//         formData.append('pInStock', pInStock );
//         formData.append('pState', pState);

//         const responce = await axios.post("http://localhost/api/product.php", formData)
//         if(responce.data.success){
//             // setMessage(responce.data.success);
//             alert("ok")
//             console.log(responce.data.success)
           
//         }

//         // axios.post("http://localhost/api/product.php", formData)
//         // .then(response =>)

//     }
//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         await uploadProduct();
//     }
// }
    const [inputs,setInputs] = useState({})
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
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

    const navigate = useNavigate()

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
    }
    const handleCange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setAttemptedSubmit(true);
        if (validateForm()) {
            axios.post('http://localhost/api/product.php', inputs)
                .then(function (response) {
                    console.log(response.data);
                    console.log(inputs);
                    alert("Добавлено!");
                    navigate('/admin:cataloge/');
                });
        }
    }
    const fields = Object.keys(fieldLabels);
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     axios.post('http://localhost/api/product.php', inputs).
    //     then(function(response){
    //         console.log(response.data)
    //         console.log(inputs)
    //         alert("Добавлено!")
    //         navigate('/admin:cataloge/');
    //     })
    // } 
    // return (
    //     <>
    //         <div className="wrapper-addedProduct">
    //             <h3 className='addedProduct-title'>Добавить новый продукт</h3>
    //             <form className='addedProduct-form' onSubmit={handleSubmit}>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Имя продукта</label>
    //                     <input name = 'name' 
    //                     type='text' 
    //                     placeholder='Введите название продукта' 
    //                     className='' 
    //                     onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Артикул</label>
    //                     <input name = 'article' type='text' placeholder='Введите артикул' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Описание</label>
    //                     <input  name = 'decribe' type='text' placeholder='Введите описание ' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Цена</label>
    //                     <input  name = 'price' type='text' placeholder='Введите цену' className='' onChange={handleCange}/>
    //                 </div>

    //                 {/* <div className='addedProduct-form__item'>
    //                     <label>Фото</label>
    //                     <input  name = 'photo' type='file' className='' onChange={handleCange}/>
    //                 </div> */}

    //                 <div className='addedProduct-form__item'>
    //                     <label>Тип обоев</label>
    //                     <input name = 'typeWallPaper' type='text' placeholder='Введите тип продукта' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Основа</label>
    //                     <input name = 'baseWAallPapaper' type='text' placeholder='Введите основу обоев' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Коллекция</label>
    //                     <input name = 'collectionWallPapaper' type='text' placeholder='Введите коллекцию' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Помещение</label>
    //                     <input name = 'room' type='text' placeholder='Введите помещение' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Цвет</label>
    //                     <input name = 'color' type='text' placeholder='Введите цвет' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Наличие рисунка</label>
    //                     <input name = 'isDriver' type='text' placeholder='наличие рисунка' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Тема рисунка</label>
    //                     <input name = 'themeDriver' type='text' placeholder='Введите тему рисунка' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Тип стыковки</label>
    //                     <input name = 'typeStik' type='text' placeholder='Введите тип стыковки' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Ширина</label>
    //                     <input name = 'widthWallPaper' type='text' placeholder='Введите длинну' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Производитель</label>
    //                     <input name = 'manufacturer' type='text' placeholder='Введите производителя' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Страна изготовитель</label>
    //                     <input name = 'country' type='text' placeholder='Введите страну изготовителя' className='' onChange={handleCange}/>
    //                 </div>
    //                 <div className='addedProduct-form__item'>
    //                     <label>Поверхность</label>
    //                     <input name = 'surfaceProduct' type='text' placeholder='Введите страну изготовителя' className='' onChange={handleCange}/>
    //                 </div>
                   

    //                 <div className='addedProduct-form__item'>
    //                     <label>В наличии</label>
    //                     <input name = 'isNalle'  type='text' placeholder='состояние продукта' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div className='addedProduct-form__item'>
    //                     <label>Состояние продукта</label>
    //                     <input name = 'stateProduct'  type='text' placeholder='акция \ новинка \ популярное' className='' onChange={handleCange}/>
    //                 </div>

    //                 <div>
    //                     <button type="submit" className='btn-form' disabled={!isFormValid}>
    //                         Отправить 
    //                     </button>
    //                     <button type='reset' className='btn-form'>
    //                        Очистить форму
    //                     </button>
    //                 </div>
    //             </form>
    //         </div>



    //     </>
    // )
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
                                        onChange={handleCange}
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
                                        onChange={handleCange}
                                    />
                                    {errors[field] && attemptedSubmit && <span className="error-text">{errors[field]}</span>}
                                </div>
                            ))}
                        </div>
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
}
export default AddProductComponent;
