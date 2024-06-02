    import './../../css/vars.scss';
    import './navbar.scss';
    import fav1 from './../../assets/icon/faforite1.png';
    import basket from './../../assets/icon/basket1.png';
    import login from './../../assets/icon/login.png';
    import logout from './../../assets/icon/logout.png';
    import { Link, useNavigate } from "react-router-dom";
    import CartBtn from '../../components/cartBtn';
    import { useState } from 'react';

    export const Navbar = ({ cartItemCount, user, setUser, language, setLanguage }) => {
        const navigate = useNavigate();
        
        const handleLogout = () => {
            const confirmed = window.confirm(language === 'en' ? 'Do you want to log out?' : 'Вы хотите выйти из системы?');
            if (confirmed) {
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
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
                        <Link to={`/favorite/`} className="nav-list__link">
                            <img src={fav1} alt="Favorite"/>
                        </Link>
                    </li>
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
