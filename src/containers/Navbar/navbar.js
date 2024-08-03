import './../../css/vars.scss';
import './navbar.scss';
import fav1 from './../../assets/icon/faforite1.png';
import basket from './../../assets/icon/basket1.png';
import login from './../../assets/icon/login.png';
import logout from './../../assets/icon/logout.png';
import { Link, useNavigate } from "react-router-dom";
import CartBtn from '../../components/cartBtn';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Navbar = ({ cartItemCount, user, setUser, language, setLanguage,cartItems,setCartItems }) => {
    const navigate = useNavigate();
    // const [cartItems, setCartItems] = useState([]);
    const handleLogout = async () => {
        const confirmed = window.confirm(language === 'en' ? 'Do you want to log out?' : 'Вы хотите выйти из системы?');
        if (confirmed) {
            await axios.post('http://localhost/api/cart.php', {
                userId: user.IdPerson,
                items: cartItems,
            });
            setUser(null);
            localStorage.removeItem('user');
            setCartItems([]);
            navigate('/');
            console.log(cartItems)
        }
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
    };

    return (
        <div className="nav">
            <a href="/" className="logo">MagicWall</a>
            <ul className="nav-list">
                <li className="nav-list__item"><Link to={`/cataloge/`} className="nav-list__link">{language === 'en' ? 'Catalog' : 'Каталог'}</Link></li>
                <li className="nav-list__item"><Link to={`/constructor/`} className="nav-list__link">{language === 'en' ? 'Constructor' : 'Конструктор'}</Link></li>
                <li className="nav-list__item"><Link to={`/about/`} className="nav-list__link">{language === 'en' ? 'About Us' : 'О нас'}</Link></li>
               
                <li className="nav-list__item nav__icon">
                    <Link to={`/cart/`} className="nav-list__link">
                        <CartBtn cartItemCount={cartItemCount} />
                    </Link>
                </li>
            </ul>
            <div className="login">
                {user ? (
                    <img src={logout} onClick={handleLogout} alt="Logout" />
                ) : (
                    <Link to={`/login/`} className="nav-list__link">
                        <img src={login} alt="Login"/>
                    </Link>
                )}
            </div>
        </div>
    );
};
