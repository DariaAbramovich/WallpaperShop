// import search_icon from './../../assets/icon/akar-icons_search.png';
// import './search.scss'
// import { useEffect, useState } from 'react'

// export const Search = ({ setSearchResults }) => {
//     const [inputs, setInputs] = useState('');

//     const fetchData = (value) => {
//         fetch('http://localhost/api/product.php').then((response) => response.json()).then(json => {
//             const result = json.filter((data) => {
//                 return data && data.NameProduct && data.NameProduct.toLowerCase().includes(value.toLowerCase());
//             });
//             setSearchResults(result);
//         });
//     };

//     const handleChange = (value) => {
//         setInputs(value);
//         if (value.length !== 0) {
//             fetchData(value);
//         } else {
//             setSearchResults([]);
//         }
//     };

//     return (
//         <div className="header__search search-form">
//             <input 
//                 name="searchOne" 
//                 className="search-form__input" 
//                 value={inputs} 
//                 onChange={(e) => handleChange(e.target.value)} 
//                 placeholder='Search...' 
//             />
//             <button className="search-form__btn" type='submit'>
//                 <img src={search_icon} className="search-img" alt="search icon" />
//             </button>
//         </div>
//     );
// };

// import search_icon from './../../assets/icon/akar-icons_search.png';
// import './search.scss'
// import { useState } from 'react'

// export const Search = ({ setSearchResults, onFocusChange }) => {
//     const [inputs, setInputs] = useState('');

//     const fetchData = (value) => {
//         fetch('http://localhost/api/product.php').then((response) => response.json()).then(json => {
//             const result = json.filter((data) => {
//                 return data && data.NameProduct && data.NameProduct.toLowerCase().includes(value.toLowerCase());
//             });
//             setSearchResults(result);
//         });
//     };

//     const handleChange = (value) => {
//         setInputs(value);
//         if (value.length !== 0) {
//             fetchData(value);
//         } else {
//             setSearchResults([]);
//         }
//     };

//     const handleFocus = (isFocused) => {
//         if (onFocusChange) {
//             onFocusChange(isFocused);
//         }
//     };

//     return (
//         <div className="header__search search-form">
//             <input 
//                 name="searchOne" 
//                 className="search-form__input" 
//                 value={inputs} 
//                 onChange={(e) => handleChange(e.target.value)}
//                 onFocus={() => handleFocus(true)}
//                 onBlur={() => handleFocus(false)}
//                 placeholder='Search...'
//             />
//             <button className="search-form__btn" type='submit'>
//                 <img src={search_icon} className="search-img" alt="search icon" />
//             </button>
//         </div>
//     );
// };

// import React, { useState } from 'react';
// import search_icon from './../../assets/icon/akar-icons_search.png';
// import close_icon from './../../assets/icon/close.png';
// import search_icon2 from './../../assets/icon/icons8-поиск-64.png';

// import './search.scss';

// export const Search = ({ setSearchResults }) => {
//     const [inputs, setInputs] = useState('');
//     const [isExpanded, setIsExpanded] = useState(false);

//     const fetchData = (value) => {
//         fetch('http://localhost/api/product.php').then((response) => response.json()).then(json => {
//             const result = json.filter((data) => {
//                 return data && data.NameProduct && data.NameProduct.toLowerCase().includes(value.toLowerCase());
//             });
//             setSearchResults(result);
//         });
//     };

//     const handleChange = (value) => {
//         setInputs(value);
//         if (value.length !== 0) {
//             fetchData(value);
//         } else {
//             setSearchResults([]);
//         }
//     };

//     const handleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <div className="search-container">
//             <div className='search-form__btn'>

           
//             <button className="search-icon" onClick={handleExpand}>
//                 <img src={isExpanded ? close_icon : search_icon2} alt="search icon" />
//             </button>
//             </div>
//             {isExpanded && (
//                 <input
//                     name="searchOne"
//                     className="search-form__input"
//                     value={inputs}
//                     onChange={(e) => handleChange(e.target.value)}
//                     placeholder='Search...'
//                 />
//             )}
//         </div>
//     );
// };


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
