import './navbar.scss';
import fav1 from './../../assets/icon/faforite1.png';
import basket from './../../assets/icon/basket1.png'
import login from './../../assets/icon/login.png'
import {Link} from "react-router-dom";
import CardBtn from '../../components/basket-btn';

export const Navbar = () => {
    return (
        <>
            <div className="nav">
                <a href="/" className="logo">MagicWall</a>
                <ul className="nav-list">
                    {/* <li className="nav-list__item"><a href="cataloge/" className="nav-list__link">Каталог</a></li>
                     */}
                    <li className="nav-list__item"><Link to={`/cataloge/`} className="nav-list__link">Каталог</Link></li>

                    <li className="nav-list__item"><Link to={`/constructor/`} className="nav-list__link">Конструктор</Link></li>
                    <li className="nav-list__item"><Link to={`/about/`} className="nav-list__link">О нас</Link></li>
                    <li className="nav-list__item nav__icon">
                        <Link to={`/favorite/`}className="nav-list__link">
                            <img src={fav1} />
                        </Link>
                    </li>
                    <li className="nav-list__item nav__icon">
                        <Link to={`/basket/`} className="nav-list__link">
                           <CardBtn/>
                        </Link>
                    </li>
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