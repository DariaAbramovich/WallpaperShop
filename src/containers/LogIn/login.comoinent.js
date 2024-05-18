import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import './login.scss';
import back from './../../assets/icon/back.png';
import close from './../../assets/icon/close.png';


const LoginComponent = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [users, setUsers] = useState([]);

    const [loginUser, setLoginUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [dirtyLoginUser, setDirtyLoginUser] = useState(false);
    const [dirtyPasswordUser, setDirtyPasswordUser] = useState(false);
    const [errorLoginUser, setErrorLoginUser] = useState("Поле логин не должно быть пустым");
    const [errorPasswordUser, setErrorPasswordUser] = useState("Поле пароль не должно быть пустым");

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = (e) => {
        axios.get('http://localhost/api/user.php', inputs).
            then(function (response) {
                console.log(response.data);
                setUsers(response.data);
                // navigate('/');
            })
    }

    const loginHanglerUser = (e) => {
        setLoginUser(e.target.value);
        if (e.target.value){
            setErrorLoginUser("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorLoginUser("Некорректный логин");
        }
    }
    const passnHanglerUser = (e) => {
        setPasswordUser(e.target.value);
       const  ToLogin = (e)=>{
        navigate('/admin/')
       }
        if (e.target.value) {
            setErrorPasswordUser("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))

            if(Array.isArray(users)){
                users.map((user, key) => {
                    let pass = document.getElementById('pass')
                    let login = document.getElementById('login')
        
                    for (var i in user) {
                         console.log("lodin -", user.Login);
                       
                        if (login.value != "" && pass.value != "") {
                            if(login.value == "admin" && pass.value=="admin"){
                                navigate('/admin/')
                                break;
                            }
                            if (login.value == user.Login && pass.value == user.Password) {
                                navigate('/')
                                break;
                            }
                            else {
                                setErrorPasswordUser("Неверный пароль");
                            }
                        }
                    }
        
                })
            }
        }
        else {
            setErrorPasswordUser("Заполните поле");
        }
        
    }
    const blurHandlerUser = (e) => {
        switch (e.target.name) {
            case 'login':
                setDirtyLoginUser(true);
                break;
            case 'password':
                setDirtyPasswordUser(true);
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
            <div >
                <div>
                </div>
                <form className="login-form" onSubmit={getUsers}>
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
                                onChange={e => loginHanglerUser(e)}
                                value={loginUser}
                                onBlur={e => blurHandlerUser(e)}
                                placeholder="введите логин" className="input-item" />
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
                                onChange={e => passnHanglerUser(e)}
                                value={passwordUser}
                                onBlur={e => blurHandlerUser(e)}
                                placeholder="введите пароль"
                                className="input-item"/>
                        </div>
                    </div>
                    {/* {Array.isArray(users)
                        ? users.map((user, key) => {
                            let pass = document.getElementById('pass')
                            let login = document.getElementById('login')

                            for (var i in user) {
                                 console.log("lodin -", user.Login);
                                if (login.value != "" && pass.value != "") {
                                    if (login.value == user.Login && pass.value == user.Password) {
                                        navigate('/')
                                        break;
                                    }
                                    else {
                                        
                                    }
                                }
                            }

                        }
                        )
                        : null} */}
                    <div>
                        <button className="login-btn">Log in</button>
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