import search_icon from './../../assets/icon/akar-icons_search.png';
import './search.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { json, Link, useSearchParams } from 'react-router-dom'


export const Search = ({setResult}) => {
    const [inputs, setInputs] = useState('')
    const [searchParamsOne, setSearchParamsOne] = useSearchParams();
    const postQueryOne = searchParamsOne.get('pData') || '';
    const [toggle, setToggle] = useState(false);
   
    const fetchData = (value) =>{
        fetch('http://localhost/api/product.php').then((response)=>response.json()).then(json=>{
           
            const result = json.filter((data) =>{
                return data && data.NameProduct && data.NameProduct.toLowerCase().includes(value);
            })
            // console.log('result',result)
            setResult(result)
        })
    }
    const  handleCange  = (value) =>{
      
        setInputs(value)
        console.log("value",value, value.length)
        if( value.length != 0){
              fetchData(value)
        }else{
            fetchData(null)
        }
        
    }
    return (
        <>
            <div className="header__search search-form">
                <input name="searchOne" className="search-form__input" value={inputs} onChange={(e)=>handleCange(e.target.value)} placeholder='Search...'  />
                <button className="search-form__btn" type='submit'  >
                    <img src={search_icon} className="search-img" />
                </button>
            </div>
            
        </>
    )
}

