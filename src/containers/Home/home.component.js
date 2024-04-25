import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from '../../components/container'
import { Navbar } from '../Navbar/navbar'
import { Search } from '../Search/search'
import { ProductsContainer } from './Products/products.container'
import './home.scss'
import Card from '../../components/card'
import { ShopService } from '../../core/api'
import search_icon from './../../assets/icon/akar-icons_search.png';
import { useSearchParams } from 'react-router-dom'



const HomeComponent = () => {
    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('pData') || '';
    const latest = searchParams.has('latest');
    const startForm = latest ? 80 : 1;
    
    // const pName = [];
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = (e) => {
        // axios.get('http://localhost/api/product.php', inputs).
        ShopService.getProduct().
            then(function (response) {
                console.log(response.data);
                setProductData(response.data);

            //  response.data.forEach(element => {
            //         pName.push(element.NameProduct)
            //     }); 
            //     console.log("response.data", pName )
            })
    }
    // productData.filter(
    //     pData => pData.NameProduct.includes(postQuery)
    // ).map((pData, index) => {
            
    //     const { NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct, InStock } = pData;
    // })
    // const testSearch = (world, pName)=>{
        
    //     return pName.filter(s => {
    //         const regex = new RegExp(world, 'gi');
    //         return s.pName.match(regex);
    //     })

    // }
    useEffect(() => {
       
    }, [])
    
    const handleCange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
        console.log(value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({pData: query})
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <Navbar />
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                       <form onSubmit={ handleSubmit }>
                        <div className="header__search search-form">
                                <input name="search" className="search-form__input" onChange={handleCange} placeholder='Search...' type="search"  />
                                <button className="search-form__btn" type='submit'>
                                <img src={search_icon} className="search-img"/>
                                </button>
                        </div> 
                        <>
                        
                        <h1>title</h1>  
                            {
                                 productData.filter(
                                    pData => pData.NameProduct.includes(postQuery)
                                 ).map((pData, index) => {
                                    console.log('product', pData)
                                    const { NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct, InStock } = pData;
                                    return(
                                        <h1>{pData.NameProduct}</h1>
                                    )
                                })
                            }
                            <h1>title</h1>
                        </>
                        </form> 
                        
                    </div>
                </div>
            </header>
            {/* <ProductsContainer /> */}

        </>
    )
}

export default HomeComponent;

