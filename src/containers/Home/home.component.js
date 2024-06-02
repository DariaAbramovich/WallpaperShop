
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

const HomeComponent = ({ cartItemCount, user, setUser, language, setLanguage}) => {
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
                    <Navbar cartItemCount={cartItemCount} user={user} setUser={setUser} language={language} setLanguage={setLanguage} />
               
                    <div className="header__content">
                        <h1 className="header__title">{language === 'en' ? 'Impeccable life begins at home.' : 'Безупречная жизнь начинается дома.'}</h1>
                        <p>{language === 'en' ? 'Bring your brightest dreams to life with us!' : 'Воплощайте вместе с нами свои самые яркие мечты!'}</p>
                    </div>
                </div>
            </header>
            
            <InfoBlog language={language} />
        </>
    );
};

export default HomeComponent;
