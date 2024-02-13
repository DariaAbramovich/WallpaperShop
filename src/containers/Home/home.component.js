import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from '../../components/container'
import { Navbar } from '../Navbar/navbar'
import { Search } from '../Search/search'
import { ProductsContainer } from './Products/products.container'
import './home.scss'

const HomeComponent = () => {
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
    productData.map((pData, index)=>{
        console.log('products:', pData)
        const {NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct,InStock} = pData;
        // return (
        //     <Card nameproduct={NameProduct} article = {Article} type={TypeProduct} priceProduct={PriceProduct} photoProduct={PhotoProduct} inStock={InStock}/>
        //     // <Card key={index}>
        //   )
    })

    return (
        <>
            <header className="header">
                <div className="container">
                    <Navbar />
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                        <div className="header__search search-form">
                            <Search />
                        </div>
                    </div>
                </div>
            </header>
            <ProductsContainer />

        </>
    )
}
export default HomeComponent;

