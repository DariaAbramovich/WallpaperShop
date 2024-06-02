import axios from 'axios'
import { Search, SearchRe } from "../Search/search";
import Swiper from 'swiper';
import 'swiper/css';
import { useEffect, useState } from 'react'

import './cataloge.scss'
import Card from '../../components/card';
import { SearchResult } from '../Search/searchResult';
import { Link } from 'react-router-dom';
import { NonWowen } from './section/woven';

const CatalogeComponent = ({ addToCart, user}) => {

    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    const [result, setResult] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [stateProd,setStateProd ] = useState('');
    const [stateProds,setStateProds ] = useState([]);
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setManufacturers] = useState([]);
    

    const [filterApplied, setFilterApplied] = useState(false); // To track whether filters are applied or not

    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost/api/product.php', { params: inputs });
            if (Array.isArray(response.data)) {
                setProductData(response.data);
                const uniqueManufacturers = [...new Set(response.data.map(product => product.Country))];
                setManufacturers(uniqueManufacturers);
                const uniqueStateProd = [...new Set(response.data.map(product => product.StateProduct))];
                setStateProds(uniqueStateProd)
                console.log(uniqueStateProd)
            }
            else {
                console.error('Данные ответа не являются массивом', response.data);
            }
        }
        catch (error) {
            console.error('Ошибка получения данных о продукте:', error);
        }
    };
    const applyFilters = () => {
        setFilterApplied(true);
    };

    const resetFilters = () => {
        setMinPrice('');
        setMaxPrice('');
        setManufacturer('');
        setStateProd('');
        setFilterApplied(false);
    };

    const filteredProducts = productData.filter((pData) => {
        const price = parseFloat(pData.PriceProduct);
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        if (filterApplied) {
            if (!isNaN(min) && price < min) return false;
            if (!isNaN(max) && price > max) return false;
            if(stateProd && pData.StateProduct !== stateProd) return false
            if (manufacturer && pData.Country !== manufacturer) return false;
            
        }
        return true;
    });
    return (
        <>
            <div className="container">
                <div className="search-position">
                    <div >
                        <Search setResult={setResult} />
                        <div className='search_filter_place' >
                        <SearchResult result={result} />

                        </div>
                    </div>
                </div>
                <div className="cataloge">
                    <div className="cataloge-wrapper">
                        <div className="cataloge-filter">
                            <div className="filter_title">Фильтрация</div>
                            <div className="filter-type">
                                <div >
                                    <div>
                                        <div>
                                            <div className='filter_param'>Цена от:</div>
                                            <input
                                                className='price__from'
                                                type="number"
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(e.target.value)}
                                                placeholder='0 руб.'
                                            />
                                            <div className='filter_param'>Цена до:</div>
                                            <input
                                            className='price__from'
                                                type="number"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)}
                                                placeholder='0 руб.'
                                            />
                                        </div>
                                      
                                        <div>
                                           <div  className='filter_param'>Состояние товара:</div> 
                                            <select className='select_area'
                                                value={stateProd}
                                                onChange={(e) => setStateProd(e.target.value)}
                                            >
                                             {/* <option value="">Все</option> */}
                                             {stateProds.map((stedP, index) => (
                                                    <option key={index} value={stedP}>{stedP}</option>
                                                ))}
                                          
                                            </select>
                                        </div>
                                        <div>

                                          <div className='filter_param'>Страна производитель:</div>  
                                            <select
                                            className='select_area'
                                                value={manufacturer}
                                                onChange={(e) => setManufacturer(e.target.value)}
                                            >
                                                <option value="">Все</option>
                                                {manufacturers.map((manuf, index) => (
                                                    <option key={index} value={manuf}>{manuf}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='btn_filter_area'>
                                        <button className='btn_filter' onClick={applyFilters}>Применить фильтры</button>
                                        <button className='btn_filter' onClick={resetFilters}>Сбросить фильры</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cataloge-cards">
                            <div>
                                <div className="catalog-title">Каталог
                                    <div className='catalog_category'>
                                        <Link to={'/cataloge/'} className='category_btn'> Все</Link>
                                        <Link to={'/nonWoven/'} className='category_btn'>Флизелиновые</Link>
                                        <Link to={'/paperwall/'} className='category_btn'>Бумажные</Link>
                                        <Link to={'/vinil/'} className='category_btn'>Виниловые</Link>
                                    </div>
                                </div>


                            </div>

                            <div className="card-wrapper">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((pData) => {
                                        const {
                                            IdProduct,
                                            NameProduct,
                                            Article,
                                            TypeProduct,
                                            PriceProduct,
                                            InStock,
                                            DescribeProduct,
                                            BaseProduct,
                                            CollectionProduct,
                                            Appointment,
                                            ColorProduct,
                                            DrawingProduct,
                                            ThemeDrawing,
                                            DockingProduct,
                                            WidthProduct,
                                            Manufacturer,
                                            Country,
                                            SurfaceProduct,
                                            StateProduct,
                                            Photo
                                        } = pData;
                                        return (
                                            <div key={IdProduct}>
                                                <Card
                                                    id={IdProduct}
                                                    nameproduct={NameProduct}
                                                    article={Article}
                                                    type={TypeProduct}
                                                    priceProduct={PriceProduct}
                                                    inStock={InStock}
                                                    describeProduct={DescribeProduct}
                                                    baseProduct={BaseProduct}
                                                    collectionProduct={CollectionProduct}
                                                    appointment={Appointment}
                                                    colorProduct={ColorProduct}
                                                    drawingProduct={DrawingProduct}
                                                    themeDrawing={ThemeDrawing}
                                                    dockingProduct={DockingProduct}
                                                    widthProduct={WidthProduct}
                                                    manufacturer={Manufacturer}
                                                    country={Country}
                                                    surfaceProduct={SurfaceProduct}
                                                    stateProduct={StateProduct}
                                                    photoProduct={Photo}
                                                    addToCart={ addToCart}
                                                    user= {user}
                                                    
                                                />
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>Таких товаров нет</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default CatalogeComponent;

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './cataloge.scss';
// import Card from '../../components/card';
// import { Search } from '../Search/search';
// import { Link } from 'react-router-dom';
// import translate from 'translate-google'; 
// const CatalogeComponent = ({ addToCart, user, language }) => {
//     const [productData, setProductData] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');
//     const [stateProd, setStateProd] = useState('');
//     const [stateProds, setStateProds] = useState([]);
//     const [manufacturer, setManufacturer] = useState('');
//     const [manufacturers, setManufacturers] = useState([]);
//     const [filterApplied, setFilterApplied] = useState(false);

//     useEffect(() => {
//         getProducts();
//     }, []);

//     const getProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost/api/product.php');
//             if (Array.isArray(response.data)) {
//                 const translatedData = await Promise.all(response.data.map(async (product) => {
//                     // Переводим все поля данных с русского на английский
//                     const translatedProduct = {};
//                     for (const key in product) {
//                         if (Object.hasOwnProperty.call(product, key)) {
//                             const translatedValue = await translate(product[key], { to: 'en' });
//                             translatedProduct[key] = translatedValue;
//                         }
//                     }
//                     return translatedProduct;
//                 }));
//                 setProductData(translatedData);
//                 const uniqueManufacturers = [...new Set(translatedData.map(product => product.Country))];
//                 setManufacturers(uniqueManufacturers);
//                 const uniqueStateProd = [...new Set(translatedData.map(product => product.StateProduct))];
//                 setStateProds(uniqueStateProd);
//             } else {
//                 console.error('Response data is not an array', response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching product dataт:', error);
//         }
//     };
//     const applyFilters = () => {
//         setFilterApplied(true);
//     };

//     const resetFilters = () => {
//         setMinPrice('');
//         setMaxPrice('');
//         setManufacturer('');
//         setStateProd('');
//         setFilterApplied(false);
//     };

//     const filteredProducts = productData.filter((pData) => {
//         const price = parseFloat(pData.PriceProduct);
//         const min = parseFloat(minPrice);
//         const max = parseFloat(maxPrice);
//         if (filterApplied) {
//             if (!isNaN(min) && price < min) return false;
//             if (!isNaN(max) && price > max) return false;
//             if (stateProd && pData.StateProduct !== stateProd) return false;
//             if (manufacturer && pData.Country !== manufacturer) return false;
//         }
//         return true;
//     });

//     const displayProducts = searchResults.length > 0 ? searchResults : filteredProducts;

//     return (
//         <div className="container">
//             <div className="search-position">
//                 <div>
//                     <Search setSearchResults={setSearchResults} />
//                 </div>
//             </div>
//             <div className="cataloge">
//                 <div className="cataloge-wrapper">
//                     <div className="cataloge-filter">
//                         <div className="filter_title">{language === 'en' ? 'Filters' : 'Фильтрация'}</div>
//                         <div className="filter-type">
//                             <div>
//                                 <div>
//                                     <div className='filter_param'>{language === 'en' ? 'Price from:' : 'Цена от:'}</div>
//                                     <input
//                                         className='price__from'
//                                         type="number"
//                                         value={minPrice}
//                                         onChange={(e) => setMinPrice(e.target.value)}
//                                         placeholder={language === 'en' ? '0 rub.' : '0 руб.'}
//                                     />
//                                     <div className='filter_param'>{language === 'en' ? 'Price to:' : 'Цена до:'}</div>
//                                     <input
//                                         className='price__from'
//                                         type="number"
//                                         value={maxPrice}
//                                         onChange={(e) => setMaxPrice(e.target.value)}
//                                         placeholder={language === 'en' ? '0 rub.' : '0 руб.'}
//                                     />
//                                 </div>
//                                 <div>
//                                     <div className='filter_param'>{language === 'en' ? 'Product State:' : 'Состояние товара:'}</div>
//                                     <select className='select_area'
//                                         value={stateProd}
//                                         onChange={(e) => setStateProd(e.target.value)}
//                                     >
//                                         {stateProds.map((stedP, index) => (
//                                             <option key={index} value={stedP}>{stedP}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <div className='filter_param'>{language === 'en' ? 'Country of Manufacture:' : 'Страна производитель:'}</div>
//                                     <select className='select_area'
//                                         value={manufacturer}
//                                         onChange={(e) => setManufacturer(e.target.value)}
//                                     >
//                                         <option value="">{language === 'en' ? 'All' : 'Все'}</option>
//                                         {manufacturers.map((manuf, index) => (
//                                             <option key={index} value={manuf}>{manuf}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className='btn_filter_area'>
//                                     <button className='btn_filter' onClick={applyFilters}>{language === 'en' ? 'Apply Filters' : 'Применить фильтры'}</button>
//                                     <button className='btn_filter' onClick={resetFilters}>{language === 'en' ? 'Reset Filters' : 'Сбросить фильры'}</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="cataloge-cards">
//                         <div>
//                             <div className="catalog-title">{language === 'en' ? 'Catalog' : 'Каталог'}
//                                 <div className='catalog_category'>
//                                     <Link to={'/cataloge/'} className='category_btn'>{language === 'en' ? 'All' : 'Все'}</Link>
//                                     <Link to={'/nonWoven/'} className='category_btn'>{language === 'en' ? 'Non-Woven' : 'Флизелиновые'}</Link>
//                                     <Link to={'/paperwall/'} className='category_btn'>{language === 'en' ? 'Paper' : 'Бумажные'}</Link>
//                                     <Link to={'/vinil/'} className='category_btn'>{language === 'en' ? 'Vinyl' : 'Виниловые'}</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card-wrapper">
//                         {filteredProducts.length > 0 ? (
//                                     filteredProducts.map((pData) => {
//                                         const {
//                                             IdProduct,
//                                             NameProduct,
//                                             Article,
//                                             TypeProduct,
//                                             PriceProduct,
//                                             InStock,
//                                             DescribeProduct,
//                                             BaseProduct,
//                                             CollectionProduct,
//                                             Appointment,
//                                             ColorProduct,
//                                             DrawingProduct,
//                                             ThemeDrawing,
//                                             DockingProduct,
//                                             WidthProduct,
//                                             Manufacturer,
//                                             Country,
//                                             SurfaceProduct,
//                                             StateProduct,
//                                             Photo
//                                         } = pData;
//                                         return (
//                                             <div key={IdProduct}>
//                                                 <Card
//                                                     id={IdProduct}
//                                                     nameproduct={NameProduct}
//                                                     article={Article}
//                                                     type={TypeProduct}
//                                                     priceProduct={PriceProduct}
//                                                     inStock={InStock}
//                                                     describeProduct={DescribeProduct}
//                                                     baseProduct={BaseProduct}
//                                                     collectionProduct={CollectionProduct}
//                                                     appointment={Appointment}
//                                                     colorProduct={ColorProduct}
//                                                     drawingProduct={DrawingProduct}
//                                                     themeDrawing={ThemeDrawing}
//                                                     dockingProduct={DockingProduct}
//                                                     widthProduct={WidthProduct}
//                                                     manufacturer={Manufacturer}
//                                                     country={Country}
//                                                     surfaceProduct={SurfaceProduct}
//                                                     stateProduct={StateProduct}
//                                                     photoProduct={Photo}
//                                                     addToCart={ addToCart}
//                                                     user= {user}
//                                                     language={language}
//                                                 />
//                                             </div>
//                                         );
//                                     })
//                                 ) : (
//                                 <div className="no-results">
//                                     {language === 'en' ? 'No products found.' : 'Товары не найдены.'}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CatalogeComponent;
