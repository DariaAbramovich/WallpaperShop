import './navbar.scss';
import fav1 from './../../assets/icon/faforite1.png';
import basket from './../../assets/icon/basket1.png'
import login from './../../assets/icon/login.png'

export const Navbar = () => {
    return (
        <>
            <div className="nav">
                <a href="#" className="logo">MagicWall</a>
                <ul className="nav-list">
                    <li className="nav-list__item"><a href="#" className="nav-list__link">Каталог</a></li>
                    <li className="nav-list__item"><a href="#" className="nav-list__link">Конструктор</a></li>
                    <li className="nav-list__item"><a href="#" className="nav-list__link">О нас</a></li>
                    <li className="nav-list__item nav__icon">
                        <a href="#" className="nav-list__link">
                            <img src={fav1} />
                        </a>
                    </li>
                    <li className="nav-list__item nav__icon">
                        <a href="#" className="nav-list__link">
                            <img src={basket} />
                            <div className="basket__count">0</div>
                        </a>
                    </li>
                </ul>

                <div className="login">
                    <a href="#" className="nav-list__link">
                        <img src={login} />
                    </a>
                </div>


            </div>
        </>
    )
}