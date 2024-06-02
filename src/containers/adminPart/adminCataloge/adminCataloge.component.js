import axios from 'axios';
import { useEffect, useState } from 'react';
import './../../../containers/cataloge/cataloge.scss';
import { Search } from '../../Search/search';
import AdminCard from '../../../components/adminCard';
import { Link } from 'react-router-dom';
import EditProductForm from '../editProduct/editProd.component';

const AdminCatalogeComponent = () => {
    const [inputs, setInputs] = useState({});
    const [productData, setProductData] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [stateProd, setStateProd] = useState('');
    const [stateProds, setStateProds] = useState([]);
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setManufacturers] = useState([]);
    const [filterApplied, setFilterApplied] = useState(false); // To track whether filters are applied or not
    const [editProductId, setEditProductId] = useState(null); // Хранит ID редактируемого товара
    const [showEditModal, setShowEditModal] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showNewProducts, setShowNewProducts] = useState(false);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost/api/product.php', { params: inputs });
            if (Array.isArray(response.data)) {
                setProductData(response.data);
                const uniqueManufacturers = [...new Set(response.data.map(product => product.Country))];
                setManufacturers(uniqueManufacturers);
                const uniqueStateProd = [...new Set(response.data.map(product => product.StateProduct).filter(state => state !== 'Новинка'))];
                setStateProds(uniqueStateProd);
                console.log(uniqueStateProd);
            } else {
                console.error('Данные ответа не являются массивом', response.data);
            }
        }
        catch (error) {
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

    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost/api/product.php?id=${productId}`);
            console.log(response.data);
            // Обновляем список товаров после удаления
            getProducts();
        } catch (error) {
            console.error('Ошибка удаления товара:', error);
        }
    };

    const handleDeleteProduct = (productId) => {
        const confirmed = window.confirm('Вы уверены, что хотите удалить этот товар из каталога?');
        if (confirmed) {
            deleteProduct(productId);
        }
    };

    const handleOpenEditForm = (productId, Photo) => {
        setEditProductId(productId, Photo);
        setShowEditModal(true);
    };

    const handleCloseEditForm = () => {
        setEditProductId(null);
        setShowEditModal(false);
        // После закрытия формы обновляем список товаров
        getProducts();
    };

    const displayProducts = searchResults.length > 0 ? searchResults : filteredProducts;

    return (
        <>
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
                                            <div className='filter_param'>Помещение:</div>
                                            <select className='select_area'
                                                value={stateProd}
                                                onChange={(e) => setStateProd(e.target.value)}
                                            >
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
                                        <button onClick={showNewProductsOnly}>Показать новинки</button>
                                        <div className='btn_filter_area'>
                                            <button className='btn_filter' onClick={applyFilters}>Применить фильтры</button>
                                            <button className='btn_filter' onClick={resetFilters}>Сбросить фильтры</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cataloge-cards">
                            <div>
                                <div className="catalog-title">Каталог
                                    <div className='catalog_category'>
                                        <Link to={'/admin:cataloge/'} className='category_btn'> Все</Link>
                                        <Link to={'/admin:nonWoven/'} className='category_btn'>Флизелиновые</Link>
                                        <Link to={'/admin:paperwall/'} className='category_btn'>Бумажные</Link>
                                        <Link to={'/admin:vinil/'} className='category_btn'>Виниловые</Link>
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
                                            Photo,
                                        } = pData;
                                        return (
                                            <div key={IdProduct}>
                                                <AdminCard
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
                                                    onDelete={() => handleDeleteProduct(IdProduct)}
                                                    photoProduct={Photo}
                                                    onEdit={() => handleOpenEditForm(IdProduct, Photo)}
                                                />
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>Таких товаров нет</p>
                                )}
                                {editProductId && (
                                    <EditProductForm
                                        productId={editProductId} 
                                        onClose={handleCloseEditForm}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}

export default AdminCatalogeComponent;
