// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './edit.scss'
// import defaultImg from './../../../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg'


// const EditProductForm = ({ productId, onClose }) => {
//     const [productData, setProductData] = useState({
//         // Инициализируем данные товара пустыми значениями
//         NameProduct: '',
//         Article: '',
//         DescribeProduct: '',
//         PriceProduct: 0,
//         TypeProduct: '',
//         BaseProduct: '',
//         CollectionProduct: '',
//         Appointment: '',
//         ColorProduct: '',
//         DrawingProduct: '',
//         ThemeDrawing: '',
//         DockingProduct: '',
//         WidthProduct: '',
//         Manufacturer: '',
//         Country: '',
//         SurfaceProduct: '',
//         InStock: false,
//         StateProduct: ''
//     });

//     useEffect(() => {
//         // Получаем данные о товаре по его ID при загрузке компонента
//         getProduct();
//     }, [productId]);

//     const getProduct = async () => {
//         try {
//             const response = await axios.get(`http://localhost/api/product_correct.php?id=${productId}`);
//             setProductData(response.data);
//         } catch (error) {
//             console.error('Ошибка получения данных товара:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProductData({ ...productData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://localhost/api/product_correct.php?id=${productId}`, productData);
//             console.log(response.data);
//             onClose();
//         } catch (error) {
//             console.error('Ошибка при редактировании товара:', error);
//         }
//     };

//     return (

//         <form className="wrapper_modalEdit" onSubmit={handleSubmit}>

//             <div className='modalEdit_content'>
//                 <div className='modalEdit_title'>Редактирование данных</div>

//                 <img src={defaultImg} alt="" className="modalEdit_img"></img>
                
//                 <div>
//                 <label>Name:</label>
//                 <input type="text" name="NameProduct" value={productData.NameProduct} onChange={handleChange} />
//                 </div>
                
//                 <div>
//                 <label>Article:</label>
//                 <input type="text" name="Article" value={productData.Article} onChange={handleChange} />
//                 </div>
                
//                 <div>
//                 <label>DescribeProduct:</label>
//                 <input type="text" name="DescribeProduct" value={productData.DescribeProduct} onChange={handleChange} />
//                 </div>
                
//                 <div>
//                 <label>Price:</label>
//                 <input type="number" name="PriceProduct" value={productData.PriceProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Type:</label>
//                 <input type="text" name="TypeProduct" value={productData.TypeProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Base:</label>
//                 <input type="text" name="BaseProduct" value={productData.BaseProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Collection:</label>
//                 <input type="text" name="CollectionProduct" value={productData.CollectionProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Appointment:</label>
//                 <input type="text" name="Appointment" value={productData.Appointment} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Color:</label>
//                 <input type="text" name="ColorProduct" value={productData.ColorProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Drawing:</label>
//                 <input type="text" name="DrawingProduct" value={productData.DrawingProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Theme Drawing:</label>
//                 <input type="text" name="ThemeDrawing" value={productData.ThemeDrawing} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Docking:</label>
//                 <input type="text" name="DockingProduct" value={productData.DockingProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Width:</label>
//                 <input type="text" name="WidthProduct" value={productData.WidthProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Manufacturer:</label>
//                 <input type="text" name="Manufacturer" value={productData.Manufacturer} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Country:</label>
//                 <input type="text" name="Country" value={productData.Country} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>Surface:</label>
//                 <input type="text" name="SurfaceProduct" value={productData.SurfaceProduct} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>In Stock:</label>
//                 <input type="checkbox" name="InStock" checked={productData.InStock} onChange={handleChange} />
//                 </div>
//                 <div>
//                 <label>State:</label>
//                 <input type="text" name="StateProduct" value={productData.StateProduct} onChange={handleChange} />
//                 </div>

//                 <button  className='save-edit_btn' type="submit">Save Changes</button>
//                 <button className='close-edit_btn' type="button" onClick={onClose}>Cancel</button>
//             </div>
//         </form>
//     );
// };

// export default EditProductForm;
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
                    <label>Name:</label>
                    <input type="text" name="NameProduct" value={productData.NameProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Article:</label>
                    <input type="text" name="Article" value={productData.Article} onChange={handleChange} />
                </div>
                <div>
                    <label>DescribeProduct:</label>
                    <input type="text" name="DescribeProduct" value={productData.DescribeProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="PriceProduct" value={productData.PriceProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" name="TypeProduct" value={productData.TypeProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Base:</label>
                    <input type="text" name="BaseProduct" value={productData.BaseProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Collection:</label>
                    <input type="text" name="CollectionProduct" value={productData.CollectionProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Appointment:</label>
                    <input type="text" name="Appointment" value={productData.Appointment} onChange={handleChange} />
                </div>
                <div>
                    <label>Color:</label>
                    <input type="text" name="ColorProduct" value={productData.ColorProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Drawing:</label>
                    <input type="text" name="DrawingProduct" value={productData.DrawingProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Theme Drawing:</label>
                    <input type="text" name="ThemeDrawing" value={productData.ThemeDrawing} onChange={handleChange} />
                </div>
                <div>
                    <label>Docking:</label>
                    <input type="text" name="DockingProduct" value={productData.DockingProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Width:</label>
                    <input type="text" name="WidthProduct" value={productData.WidthProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>Manufacturer:</label>
                    <input type="text" name="Manufacturer" value={productData.Manufacturer} onChange={handleChange} />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" name="Country" value={productData.Country} onChange={handleChange} />
                </div>
                <div>
                    <label>Surface:</label>
                    <input type="text" name="SurfaceProduct" value={productData.SurfaceProduct} onChange={handleChange} />
                </div>
                <div>
                    <label>In Stock:</label>
                    <input type="checkbox" name="InStock" checked={productData.InStock} onChange={handleChange} />
                </div>
                <div>
                    <label>State:</label>
                    <input type="text" name="StateProduct" value={productData.StateProduct} onChange={handleChange} />
                </div>
                <button className='save-edit_btn' type="submit">Save Changes</button>
                <button className='close-edit_btn' type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    );
};

export default EditProductForm;
