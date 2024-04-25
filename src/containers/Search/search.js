import search_icon from './../../assets/icon/akar-icons_search.png';
import './search.scss'


export const Search = () => {
    return (
        <>
      
            {/* <div className="header__search search-form"> */}
                <input className="search-form__input"   placeholder='Search...' type="text"  />
                <button className="search-form__btn">
                <img src={search_icon} className="search-img"/>
                </button>
            {/* </div> */}

        </>
    )
}

