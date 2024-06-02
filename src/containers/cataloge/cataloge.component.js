import axios from 'axios';
import { useEffect, useState } from 'react';
import './cataloge.scss';
import Card from '../../components/card';
import { Search } from '../Search/search';
import { Link } from 'react-router-dom';

const CatalogeComponent = ({ addToCart, user, language }) => {
    const [productData, setProductData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [stateProd, setStateProd] = useState('');
    const [stateProds, setStateProds] = useState([]);
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setManufacturers] = useState([]);
    const [filterApplied, setFilterApplied] = useState(false);
    const [showNewProducts, setShowNewProducts] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost/api/product.php');
            if (Array.isArray(response.data)) {
                setProductData(response.data);
                const uniqueManufacturers = [...new Set(response.data.map(product => product.Country))];
                setManufacturers(uniqueManufacturers);
                let uniqueStateProd = [...new Set(response.data.map(product => product.StateProduct))];
                // Удаление "Новинка" из списка состояния товара
                uniqueStateProd = uniqueStateProd.filter(state => state !== 'Новинка');
                setStateProds(uniqueStateProd);
                console.log(uniqueStateProd);
            } else {
                console.error('Данные ответа не являются массивом', response.data);
            }
        } catch (error) {
            console.error('Ошибка получения данных о продукте:', error);
        }
    };

    const applyFilters = () => {
        setFilterApplied(true);
        setShowNewProducts(false);
    };

    const resetFilters = () => {
        setMinPrice('');
        setMaxPrice('');
        setManufacturer('');
        setStateProd('');
        setFilterApplied(false);
        setShowNewProducts(false);
    };

    const showNewProductsOnly = () => {
        setShowNewProducts(true);
        setFilterApplied(false);
    };

    const filteredProducts = productData.filter((pData) => {
        if (showNewProducts && pData.StateProduct !== 'Новинка') return false;
        const price = parseFloat(pData.PriceProduct);
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        if (filterApplied) {
            if (!isNaN(min) && price < min) return false;
            if (!isNaN(max) && price > max) return false;
            if (stateProd && pData.StateProduct !== stateProd) return false;
            if (manufacturer && pData.Country !== manufacturer) return false;
        }
        return true;
    });

    const displayProducts = searchResults.length > 0 ? searchResults : filteredProducts;

    return (
        <div className="container">
            <div className="search-position">
                <div>
                    <Search setSearchResults={setSearchResults} />
                </div>
            </div>
            <div className="cataloge">
                <div className="cataloge-wrapper">
                    <div className="cataloge-filter">
                        <div className="filter_title">Фильтрация</div>
                        <div className="filter-type">
                            <div>
                                <div>
                                    <div className='filter_param'>Цена от:</div>
                                    <input
                                        className='price__from'
                                        type="number"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        placeholder={'0 руб.'}
                                    />
                                    <div className='filter_param'>Цена до:</div>
                                    <input
                                        className='price__from'
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        placeholder={'0 руб.'}
                                    />
                                </div>
                                <div>
                                    <div className='filter_param'>Помещение:</div>
                                    <select className='select_area'
                                        value={stateProd}
                                        onChange={(e) => setStateProd(e.target.value)}
                                    >
                                        <option value="">Не выбрано</option>
                                        {stateProds.map((stedP, index) => (
                                            <option key={index} value={stedP}>{stedP}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <div className='filter_param'>Страна производитель:</div>
                                    <select className='select_area'
                                        value={manufacturer}
                                        onChange={(e) => setManufacturer(e.target.value)}
                                    >
                                        <option value="">Не выбрано</option>
                                        {manufacturers.map((manuf, index) => (
                                            <option key={index} value={manuf}>{manuf}</option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={showNewProductsOnly}>Показать новинки</button>

                                <div className='btn_filter_area'>
                                    <button className='btn_filter' onClick={applyFilters}>{language === 'en' ? 'Apply Filters' : 'Применить фильтры'}</button>
                                    <button className='btn_filter' onClick={resetFilters}>{language === 'en' ? 'Reset Filters' : 'Сбросить фильтры'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cataloge-cards">
                        <div>
                            <div className="catalog-title">{language === 'en' ? 'Catalog' : 'Каталог'}
                                <div className='catalog_category'>
                                    <Link to={'/cataloge/'} className='category_btn'>{language === 'en' ? 'All' : 'Все'}</Link>
                                    <Link to={'/nonWoven/'} className='category_btn'>{language === 'en' ? 'Non-Woven' : 'Флизелиновые'}</Link>
                                    <Link to={'/paperwall/'} className='category_btn'>{language === 'en' ? 'Paper' : 'Бумажные'}</Link>
                                    <Link to={'/vinil/'} className='category_btn'>{language === 'en' ? 'Vinyl' : 'Виниловые'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            {displayProducts.length > 0 ? (
                                displayProducts.map((pData) => {
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
                                                addToCart={addToCart}
                                                user={user}
                                                language={language}
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
            </div>
        </div>
    );
};

export default CatalogeComponent;
