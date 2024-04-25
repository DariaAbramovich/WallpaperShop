import React from "react";
import './../../containers/Home/home.scss'
export const SearchResultItem = ({result})=>{
    return (
   
        <div className="itemSearchPlase">
            <div className="itemSearch">{result.NameProduct}</div>

        </div>
    )
}