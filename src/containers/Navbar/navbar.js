import './../../css/vars.scss'
import './navbar.scss';
import fav1 from './../../assets/icon/faforite1.png';
import basket from './../../assets/icon/basket1.png'
import login from './../../assets/icon/login.png'
import { Link, useNavigate } from "react-router-dom";
import CardBtn from '../../components/basket-btn';
import CartBtn from '../../components/cartBtn';
import logout from './../../assets/icon/logout.png'

export const Navbar = ({ cartItemCount, user, setUser }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        const confirmed = window.confirm('Вы хотите выйти из системы?');
        if (confirmed) {
          localStorage.removeItem('user'); // Remove user data from localStorage
          setUser(null); // Clear user state in App component
          navigate('/');
        }
      };
    
    return (
        <>

            <div className="nav">
                <a href="/" className="logo">MagicWall</a>
                <ul className="nav-list">
                    <li className="nav-list__item"><Link to={`/cataloge/`} className="nav-list__link">Каталог</Link></li>
                    <li className="nav-list__item"><Link to={`/constructor/`} className="nav-list__link">Конструктор</Link></li>
                    <li className="nav-list__item"><Link to={`/about/`} className="nav-list__link">О нас</Link></li>
                    <li className="nav-list__item nav__icon">
                        <Link to={`/favorite/`} className="nav-list__link">
                            {/* <img src={fav1} /> */}
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
                        // <a href="https://www.flaticon.com/free-icons/logout" title="logout icons" onClick={handleLogout} ></a>
                        <img src={logout} onClick={handleLogout} alt="Logout" />
                    ) : (
                        <Link to={`/login/`} className="nav-list__link">
                            <img src={login} />
                        </Link>
                    )}


                </div>
            </div>
        </>
    )
}