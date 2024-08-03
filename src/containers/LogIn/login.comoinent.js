
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import './login.scss';
import back from './../../assets/icon/back.png';
import close from './../../assets/icon/close.png';

const LoginComponent = ({ setUser }) => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [users, setUsers] = useState([]);

    const [loginUser, setLoginUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [dirtyLoginUser, setDirtyLoginUser] = useState(false);
    const [dirtyPasswordUser, setDirtyPasswordUser] = useState(false);
    const [errorLoginUser, setErrorLoginUser] = useState("");
    const [errorPasswordUser, setErrorPasswordUser] = useState("");
    const [authError, setAuthError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get('http://localhost/api/user.php', inputs)
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(function (error) {
                console.error('Ошибка при получении пользователей:', error);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setDirtyLoginUser(true);
        setDirtyPasswordUser(true);
        if (!loginUser || !passwordUser) {
            alert("Поля 'Логин' и 'Пароль' должны быть заполнены.");
            return;
        }
        if (loginUser === 'admin' && passwordUser === 'admin') {
            const adminUser = { Login: 'admin', Password: 'admin', role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('user', JSON.stringify(adminUser));
            navigate('/admin/');
            return;
        }
        let matchedUser = null;
        if (Array.isArray(users)) {
            matchedUser = users.find(user => user.Login === loginUser && user.Password === passwordUser);
        }
        if (matchedUser) {
            setUser(matchedUser);
            localStorage.setItem('user', JSON.stringify(matchedUser));
            navigate('/');
        } else {
            alert("Неверный логин или пароль");
        }
    }

    const blurHandlerUser = (e) => {
        switch (e.target.name) {
            case 'login':
                setDirtyLoginUser(true);
                if (!e.target.value) {
                    setErrorLoginUser("Поле логин не должно быть пустым");
                } else {
                    setErrorLoginUser("");
                }
                break;
            case 'password':
                setDirtyPasswordUser(true);
                if (!e.target.value) {
                    setErrorPasswordUser("Поле пароль не должно быть пустым");
                } else {
                    setErrorPasswordUser("");
                }
                break;
        }
    }

    const handleCange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    return (
        <div>
            <div className="wrapper-login">
                <form className="login-form" onSubmit={handleLogin}>
                    <Link to={'/'}>
                        <img src={close} className='back' />
                    </Link>
                    <h1 className='login-form_title'>
                        Вход в аккаунт
                    </h1>

                    <div className='plase-input'>
                        <div>
                            <div>
                                <label className="login-label">Логин</label>
                            </div>
                            {(dirtyLoginUser && errorLoginUser) && <div className="login-error-plase">{errorLoginUser}</div>}
                            <input
                                type="text"
                                name="login"
                                id="login"
                                onChange={e => setLoginUser(e.target.value)}
                                value={loginUser}
                                onBlur={e => blurHandlerUser(e)}
                                placeholder="введите логин"
                                className={`input-item ${authError ? 'input-error' : ''}`}
                            />
                        </div>
                        <div>
                            <div>
                                <label className="login-label">Пароль</label>
                            </div>
                            {(dirtyPasswordUser && errorPasswordUser) && <div className="login-error-plase">{errorPasswordUser}</div>}
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                onChange={e => setPasswordUser(e.target.value)}
                                value={passwordUser}
                                onBlur={e => blurHandlerUser(e)}
                                placeholder="введите пароль"
                                className={`input-item ${authError ? 'input-error' : ''}`}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="login-btn">Войти</button>
                        <div className='link-place'>
                            <p className='text-link'>У меня нет аккаунта.<Link to={`/registred/`} className='link'> Регистрация</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent;
