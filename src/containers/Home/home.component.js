
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '../../components/container';
import { Navbar } from '../Navbar/navbar';
import { Search } from '../Search/search';
import { ProductsContainer } from './Products/products.container';
import Card from '../../components/card';
import { ShopService } from '../../core/api';
import search_icon from './../../assets/icon/akar-icons_search.png';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchResult } from '../Search/searchResult';
import { InfoBlog } from './infoBlog/infoBlog';
import './home.scss';
import { SearchHome } from './searchHome';

const HomeComponent = ({ cartItemCount, user, setUser }) => {
    const [inputs, setInputs] = useState({});
    const [productData, setProductData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('pData') || '';
    const [toggle, setToggle] = useState(false);
    const [result, setResult] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const handleSearchFocusChange = (isFocused) => {
        setIsSearchFocused(isFocused);
    };

    return (
        <>
            <header className={`header ${isSearchFocused ? 'header--dimmed' : ''}`}>
                <div className="container">
                    <Navbar cartItemCount={cartItemCount} user={user} setUser={setUser} />
                    {/* <div className="search-position">
                        <div>
                            <Search setSearchResults={setSearchResults} />
                
                        </div>
                        <div className="search-results-container">
                            {searchResults.map(product => (
                                <Card key={product.IdProduct} {...product} />
                            ))}
                        </div>
                    </div> */}
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                    </div>
                </div>
            </header>
            
            <InfoBlog />
        </>
    );
};

export default HomeComponent;
