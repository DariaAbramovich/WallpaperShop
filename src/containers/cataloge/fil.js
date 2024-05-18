// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card'; // Assuming Card is another component you have

// export const NonWowen = () => {
//     const [inputs, setInputs] = useState({});
//     const [productDataN, setProductDataN] = useState([]);
//     const [manufacturer, setManufacturer] = useState('');
//     const [manufacturers, setManufacturers] = useState([]);

//     useEffect(() => {
//         getProductsN();
//     }, []);

//     const getProductsN = async () => {
//         try {
//             const response = await axios.get('http://localhost/api/product_fliz.php', { params: inputs });
//             if (Array.isArray(response.data)) {
//                 setProductDataN(response.data);
//                 const uniqueManufacturers = [...new Set(response.data.map(product => product.Manufacturer))];
//                 setManufacturers(uniqueManufacturers);
//             } else {
//                 console.error('Response data is not an array', response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching product data:', error);
//         }
//     };

//     const filteredProducts = productDataN.filter((pData) => {
//         if (manufacturer && pData.Manufacturer !== manufacturer) return false;
//         return true;
//     });

//     return (
//         <>
//             <h1>Non-Wowen Paper</h1>
//             <div>
//                 <label>
//                     Manufacturer:
//                     <select
//                         value={manufacturer}
//                         onChange={(e) => setManufacturer(e.target.value)}
//                     >
//                         <option value="">All</option>
//                         {manufacturers.map((manuf, index) => (
//                             <option key={index} value={manuf}>{manuf}</option>
//                         ))}
//                     </select>
//                 </label>
//             </div>
//             <>
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map((pData) => {
//                         const {
//                             IdProduct,
//                             NameProduct,
//                             Article,
//                             TypeProduct,
//                             PriceProduct,
//                             PhotoProduct,
//                             InStock,
//                             DescribeProduct,
//                             BaseProduct,
//                             CollectionProduct,
//                             Appointment,
//                             ColorProduct,
//                             DrawingProduct,
//                             ThemeDrawing,
//                             DockingProduct,
//                             WidthProduct,
//                             Manufacturer,
//                             Country,
//                             SurfaceProduct,
//                             StateProduct
//                         } = pData;
//                         return (
//                             <div key={IdProduct}>
//                                 <Card
//                                     id={IdProduct}
//                                     nameproduct={NameProduct}
//                                     article={Article}
//                                     type={TypeProduct}
//                                     priceProduct={PriceProduct}
//                                     photoProduct={PhotoProduct}
//                                     inStock={InStock}
//                                     describeProduct={DescribeProduct}
//                                     baseProduct={BaseProduct}
//                                     collectionProduct={CollectionProduct}
//                                     appointment={Appointment}
//                                     colorProduct={ColorProduct}
//                                     drawingProduct={DrawingProduct}
//                                     themeDrawing={ThemeDrawing}
//                                     dockingProduct={DockingProduct}
//                                     widthProduct={WidthProduct}
//                                     manufacturer={Manufacturer}
//                                     country={Country}
//                                     surfaceProduct={SurfaceProduct}
//                                     stateProduct={StateProduct}
//                                 />
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p>No products available</p>
//                 )}
//             </>
//         </>
//     );
// };

// const [productDataN, setProductDataN] = useState([]);
// const [minPrice, setMinPrice] = useState(''); 
// const [maxPrice, setMaxPrice] = useState('');
// const [производитель, setManufacturer] = useState(''); 
// const [производители, setManufacturers] = useState([]);
// useEffect(() => { getProductsN(); }, []); 
// const getProductsN = async () =>
//  { try 
//     { const response = await axios.get('http://localhost/api/product_fliz.php', { params: inputs }); 
//     if(Array.isArray(response.data)) { 
//         setProductDataN(response.data); 
//         const uniqueManufacturers = [...new Set(response.data.map(product => product.Manufacturer))];
//          setManufacturers(uniqueManufacturers); 
//         } 
//         else { 
//             console.error('Данные ответа не являются массивом', response.data); 
//         } } 
//         catch (error) { 
//             console.error('Ошибка получения данных о продукте:', error);
//          } 
//         }; 
// const filteredProducts = productDataN.filter((pData) => {
//      const цена = parseFloat(pData.PriceProduct); 
//      const min = parseFloat(minPrice); 
//      const max = parseFloat(maxPrice); 
//      if (!isNaN(min) && цена < min) return false; 
//      if (!isNaN(max) && цена > max) return false; 
//      if (производитель && pData.Manufacturer !== производитель) 
//      return false;
//      return (
//      <>
//       <h1>Нетканая бумага</h1> 
//       <div> 
//         <label> Минимальная цена: <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /> </label> 
//         <label> Максимальная цена:<input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /> </label>
//          <label> Производитель: 
//             <select value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} > 
//             <option value="">Все</option> 
//             {manufacturers.map((manuf, index) => (<option key={index} value={manuf}>{manuf}</option>))} </select> </label> 
//     </div> 
// <> 
// {filteredProducts.length > 0 ?
//  (filteredProducts.map((pData) => {
//      const { IdProduct, NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct, InStock, DescribeProduct, BaseProduct, CollectionProduct, Назначение, ColorProduct, DrawingProduct, ThemeDrawing, DockingProduct, WidthProduct, Производитель, Страна, SurfaceProduct, StateProduct } = pData; 
//      return (
//      <div key={IdProduct}> 
//      <Card id={IdProduct} nameproduct={NameProduct} article={Article} type={TypeProduct} PriceProduct={PriceProduct} photoProduct={PhotoProduct} inStock={InStock} defineProduct={DescribeProduct} baseProduct={BaseProduct} CollectionProduct={CollectionProduct} назначение={Назначение} colorProduct={ColorProduct} DrawingProduct={DrawingProduct} themeDrawing={ThemeDrawing} dockingProduct={DockingProduct} widthProduct={WidthProduct} производителя={Производитель} страны={Страна} SurfaceProduct={SurfaceProduct} stateProduct={StateProduct} /> 
//      </div>); })) :
//       (<p>Нет доступных товаров</p>)} </> </>);  