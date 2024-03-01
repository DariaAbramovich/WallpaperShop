import './adminavbar.scss';
import login from '../../../assets/icon/login.png'
import {Link} from "react-router-dom";


export const AdminNavbar = () => {
    return (
        <>
            <div className="nav">
                <a href="/admin/" className="logo">MagicWall</a>
                <ul className="nav-list">
                    {/* <li className="nav-list__item"><a href="cataloge/" className="nav-list__link">Каталог</a></li>
                     */}
                    <li className="nav-list__item"><Link to={`/admin:cataloge/`} className="nav-list__link">Каталог</Link></li>

                    <li className="nav-list__item"><Link to={`/addedproducts/`} className="nav-list__link">Добавление товара</Link></li>
                    <li className="nav-list__item"><Link to={`/about/`} className="nav-list__link">О нас</Link></li>
                    {/* <li className="nav-list__item nav__icon">
                        <Link to={`/favorite/`}className="nav-list__link">
                            <img src={fav1} />
                        </Link>
                    </li> */}
                    {/* <li className="nav-list__item nav__icon">
                        <Link to={`/basket/`} className="nav-list__link">
                           <CardBtn/>
                        </Link>
                    </li> */}
                </ul>

                <div className="login">
                    <Link to={`/login/`} className="nav-list__link">
                        <img src={login} />
                    </Link>
                </div>


            </div>
        </>
    )
}