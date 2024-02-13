import axios from 'axios'
import { useEffect, useState } from 'react'
import { Search, SearchRe } from "../Search/search";
import './cataloge.scss'
import Card from '../../components/card';

const CatalogeComponent = () => {
//     const [productData, setProductData] = useState([]);
//     useEffect ( ()=>{
//         const getProductData = async ()=>{
//             const reqData = await fetch('http://localhost/api/index.php')
//             const resData = await reqData.json();
//             console.log(resData);
//             setProductData(resData);
//         }
//         getProductData()
// },[])

    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const  getProducts = (e) => {
    
        axios.get('http://localhost/api/product.php', inputs).
            then(function (response) {
                console.log(response.data);
                setProductData(response.data);
            })
    }

    return(
    <>
        <div className="container">
            <div className="search-position">
                <div className="search__wrapper">
                    <Search />
                </div>
            </div>
            <div className="cataloge">
                <div className="cataloge-wrapper">
                    <div className="cataloge-filter">
                        <h3 className="filter-title">Сортировка</h3>

                        <div className="filter-price">
                            <div className="filter__param">
                                Цена
                            </div>
                            <div className="input-price">
                                <input className="price__from" placeholder="От" type="number" min="0" />
                                <input className="price__to" placeholder="До" type="number" min="0" />
                            </div>
                        </div>
                        <div className="filter-brend">
                            <div className="filter__param">
                                Бренд
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Palitra
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Erismann<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    IDECO<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    RASCH<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Артекс<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Малекс<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    МаксДекор<br></br>
                                </label>
                            </form>

                        </div>
                        <div className="filter-country">
                            <div className="filter__param">
                                Страна производитель
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Россия
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Бельгия<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Германия<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Украина<br></br>
                                </label>


                            </form>
                        </div>
                        <div className="filter-room">
                            <div className="filter__param">
                                Помещение
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Гостиная
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Детская<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Кабинет<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Кухня<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Прихожая<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Спальня<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Универсальное<br></br>
                                </label>

                            </form>

                        </div>
                        <div className="filter-disane">
                            <div className="filter__param">
                                Дизайн
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Абстракция
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Геометрия<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Дамаск<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Дерево<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Камень<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Однотонный<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Плитка<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Полосы  <br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Ткань<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Узор<br></br>
                                </label>
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Флористика<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Штукатурка<br></br>
                                </label>
                            </form>


                        </div>
                        <div className="filter-type">
                            <div className="filter__param">
                                Тип
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Флизелиновые обои
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Бумажные обои<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Виниловые обои<br></br>
                                </label>


                            </form>

                        </div>
                        <div className="filter-collection">
                            <div className="filter__param">
                                Коллекция
                            </div>
                            <form className="brend-form">
                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Amadeus
                                </label><br></br>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Stories<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Галактика<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Дисней<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Идальго<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Миллениум<br></br>
                                </label>

                                <label>
                                    <input type="checkbox" name="brend" value="HTML" />
                                    Тоскана<br></br>
                                </label>
                            </form>

                        </div>
                    </div>
                    <div className="cataloge-cards">
                        <h3 className="catalog-title">Каталог</h3>
                        <div className="card-wrapper">
                            {
                                productData.map((pData, index)=>{
                                    console.log('movie', pData)
                                    
                                    const {IdProduct ,NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct,InStock} = pData;
                                    return (
                                        <Card id={IdProduct } nameproduct={NameProduct} article = {Article} type={TypeProduct} priceProduct={PriceProduct} photoProduct={PhotoProduct} inStock={InStock}/>
                                        // <Card key={index}>
                                      )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div >
        </div>
    </>
    )
}

export default CatalogeComponent;