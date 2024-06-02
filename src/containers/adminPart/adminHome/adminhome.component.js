import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductsContainer } from './Products/products.container'
import './home.scss'
import { AdminNavbar } from '../adminNavbar/adminavbar'
import { Search } from '../../Search/search'
import { InfoBlogAdmin } from './infoBlog/infoBlog'

const AdminHomeComponent = ({user, setUser}) => {
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
                    <AdminNavbar user ={user } setUser={setUser}/>
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                            {/* <Search /> */}
                    </div>
                </div>
            </header>
            <InfoBlogAdmin/>

        </>
    )
}
export default AdminHomeComponent;

