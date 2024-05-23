import './adminavbar.scss';
import login from '../../../assets/icon/login.png'
import {Link, useNavigate} from "react-router-dom";

import logout from './../../../assets/icon/logout.png'

export const AdminNavbar = ({user,setUser}) => {    
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm('Вы хотите выйти из системы?');
        if (confirmed) {
          localStorage.removeItem('user'); // Remove user data from localStorage
        //   setUser(null); // Clear user state in App component
          navigate('/login/');
        }
      };
    return (
        <>
            <div className="nav">
                <a href="/admin/" className="logo">MagicWall</a>
                <ul className="nav-list">
                   
                    <li className="nav-list__item"><Link to={`/admin:cataloge/`} className="nav-list__link">Каталог</Link></li>

                    <li className="nav-list__item"><Link to={`/addedproducts/`} className="nav-list__link">Добавление товара</Link></li>
                    <li className="nav-list__item"><Link to={`/admin:aboute/`} className="nav-list__link">О нас</Link></li>
                    
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