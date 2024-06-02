import search_icon from './../../assets/icon/akar-icons_search.png';
import search_icon2 from './../../assets/icon/icons8-поиск-64.png';
import './search.scss'
import { useEffect, useState } from 'react'

export const Search = ({ setSearchResults }) => {
    const [inputs, setInputs] = useState('');

    const fetchData = (value) => {
        fetch('http://localhost/api/product.php').then((response) => response.json()).then(json => {
            const result = json.filter((data) => {
                return data && data.NameProduct && data.NameProduct.toLowerCase().includes(value.toLowerCase());
            });
            setSearchResults(result);
        });
    };

    const handleChange = (value) => {
        setInputs(value);
        if (value.length !== 0) {
            fetchData(value);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="header__search search-form">
            <input 
                name="searchOne" 
                className="search-form__input" 
                value={inputs} 
                onChange={(e) => handleChange(e.target.value)} 
                placeholder='Search...' 
            />
            <button className="search-form__btn" type='submit'>
                <img src={search_icon} className="search-img" alt="search icon" />
            </button>
        </div>
    );
};
