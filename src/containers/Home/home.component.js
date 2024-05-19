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
import { Link, useSearchParams } from 'react-router-dom'
import { SearchResult } from '../Search/searchResult'



const HomeComponent = ({cartItemCount}) => {
    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('pData') || '';
    const [toggle, setToggle] = useState(false);
    const [result, setResult] = useState([]);
   
    return (
        <>
            <header className="header"> 
                <div className="container">
                    <Navbar cartItemCount={cartItemCount}/>
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                            <Search setResult={setResult}/>

                            <div className='search_filter_place' >
                                <SearchResult result={result}/>
                            </div>

                    </div>
                </div>
            </header>
               <ProductsContainer />

        </>
    )
}

export default HomeComponent;

