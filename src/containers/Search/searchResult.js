import { useEffect, useState } from 'react'
import { SearchResultItem } from './searcResultItem'

export const SearchResult = ({ result }) => {
    return (
        <>
            {result.length == 0 ? '' :
                result.map((result, id) => {
                    return <SearchResultItem result = {result}/>
                })
               
            }
        </>
    )
}