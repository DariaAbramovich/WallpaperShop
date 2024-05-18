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

const CatalogeComponent = () => {

    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    const [result, setResult] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = (e) => {
        axios.get('http://localhost/api/product.php', inputs).
            then(function (response) {
                // console.log(response.data);
                setProductData(response.data);
            })
    }

    const filteredProducts = productData.filter((pData) => {
        const price = parseFloat(pData.PriceProduct);
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        if (!isNaN(min) && price < min) return false;
        if (!isNaN(max) && price > max) return false;
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
                            <h3 className="filter-title">Сортировка</h3>


                            <div className="filter-type">
                                <form className="brend-form">
                                    <div >
                                        <button><Link to={'/cataloge/'}> Все обои</Link></button>
                                        <br></br>
                                        <Link to={'/nonWoven/'}>Флизелиновые обои</Link>

                                        <br></br>

                                        <button name='paper'>
                                            <Link to={'/paperwall/'}>Бумажные обои</Link>
                                        </button>

                                        <button name='vinil' >
                                            <Link to={'/vinil/'}>Виниловые обои</Link>
                                        </button>
                                        <br></br>
                                        <br></br>
                                        <div>Фильтровать по цене:</div>
                                        

                                        <div>
                                            <label>
                                                Min Price:
                                                <input
                                                    type="number"
                                                    value={minPrice}
                                                    onChange={(e) => setMinPrice(e.target.value)}
                                                />
                                            </label>
                                            <label>
                                                Max Price:
                                                <input
                                                    type="number"
                                                    value={maxPrice}
                                                    onChange={(e) => setMaxPrice(e.target.value)}
                                                />
                                            </label>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className="cataloge-cards">
                            <h3 className="catalog-title">Каталог</h3>
                            <div className="card-wrapper">
                            {filteredProducts.length > 0 ? (
                    filteredProducts.map((pData) => {
                        const {
                            IdProduct,
                            NameProduct,
                            Article,
                            TypeProduct,
                            PriceProduct,
                            PhotoProduct,
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
                            StateProduct
                        } = pData;
                        return (
                            <div key={IdProduct}>
                                <Card
                                    id={IdProduct}
                                    nameproduct={NameProduct}
                                    article={Article}
                                    type={TypeProduct}
                                    priceProduct={PriceProduct}
                                    photoProduct={PhotoProduct}
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