import axios from 'axios'
import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import './registred.scss'
import question2 from './../../../assets/icon/info.png'

const RegistredComponent = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [dirtyName, setDirtyName] = useState(false);
    const [dirtySurName, setDirtySurName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [dirtyLogin, setDirtyLogin] = useState(false);
    const [dirtyPassword, setDirtyPassword] = useState(false);

    const [errorName, setErrorName] = useState("Поле имя не должно быть пустым");
    const [errorSurName, setErrorSurName] = useState("Поле фамилия не должно быть пустым");
    const [errorPhone, setErrorPhone] = useState("Поле телефон не должно быть пустым");
    const [errorEmail, setErrorEmail] = useState("Поле почта не должно быть пустым");
    const [errorLogin, setErrorLogin] = useState("Поле логин не должно быть пустым");
    const [errorPassword, setErrorPassword] = useState("Поле пароль не должно быть пустым");


    const [inputs, setInputs] = useState({})

    let btn = document.getElementById("reg-btn");

    const nameHangler = (e) => {
        setName(e.target.value);
        const re = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        if (re.test(e.target.value)) {
            setErrorName("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorName("Некорректное имя");
        }
    }
    const surnameHangler = (e) => {
        setSurName(e.target.value);
        const re = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        if (re.test(e.target.value)) {
            setErrorSurName("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorSurName("Некорректная фамилия");
        }
    }
    const phoneHangler = (e) => {
        setPhone(e.target.value);
        const re = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if (re.test(e.target.value)) {
            setErrorPhone("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorPhone("Некорректный телефон");
        }
    }
    const emailHangler = (e) => {
        setEmail(e.target.value);
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (re.test(e.target.value)) {
            setErrorEmail("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorEmail("Некорректная почта");
        }
    }
    const loginHangler = (e) => {
        setLogin(e.target.value);
        const re = /^[a-z0-9_-]{3,16}$/;
        if (re.test(e.target.value)) {
            setErrorLogin("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorLogin("Некорректный логин");
        }
    }
    const passnHangler = (e) => {
        setPassword(e.target.value);
        const re = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
        if (re.test(e.target.value)) {
            setErrorPassword("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else {
            setErrorPassword("Ненадежный пароль");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/api/user.php',inputs ).
            then(function (response) {
                console.log(response.data);
                console.log(inputs);
                navigate('/login/');
        })
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setDirtyName(true);
                break;
            case 'surName':
                setDirtySurName(true);
                break;
            case 'phone':
                setDirtyPhone(true);
                break;
            case 'email':
                setDirtyEmail(true);
                break;
            case 'login':
                setDirtyLogin(true);
                break;
            case 'password':
                setDirtyPassword(true);
                break;
        }
    }

    
    return (
        <>
            <div className="reg-wrapper">
                <form className="reg-form" onSubmit={handleSubmit}>
                    <h1 className="reg-form_title">Создание аккаунта</h1>
                    <div className="reg-plase-input">
                       <div>
                       <img id="info-name" src={question2} className='label_question'></img>
                        <Tooltip anchorSelect="#info-name">
                          <p>Имя должно состоять из русских или английских букв</p>
                        </Tooltip >
                            <label className="reg-label">Имя</label>
                        </div> 
                        {(dirtyName && errorName) && <div className="reg-error-plase">{errorName}</div>}
                        <input
                            className="reg-input"
                            type="text"
                            name='name'
                            id='name'
                            onChange={e => nameHangler(e)}
                            value={name}
                            onBlur={e => blurHandler(e)}
                            placeholder="введите имя" />
                    </div>

                    <div className="reg-plase-input">
                        <div>
                            
                        <img id="info-surname" src={question2} className='label_question'></img>
                        <Tooltip anchorSelect="#info-surname">
                          <p>Фамилия должна состоять из русских или английских букв</p>
                        </Tooltip>
                        <label className="reg-label">Фамилия</label>
                       
                        </div>
                        {(dirtySurName && errorSurName) && <div className="reg-error-plase">{errorSurName}</div>}

                        <input
                            className="reg-input"
                            type="text"
                            name='surName'
                            id='surName'
                            onChange={e => surnameHangler(e)}
                            value={surName}
                            onBlur={e => blurHandler(e)}
                            placeholder="введите фамилию" />
                    </div>

                    <div className="reg-plase-input">
                       <div>
                       <img id="info-phone" src={question2} className='label_question'></img>
                       <Tooltip anchorSelect="#info-phone">
                          <p>Номер должен содержать в себе цифры и начинаться со знака  +</p>
                        </Tooltip>
                       <label className="reg-label">Телефон</label>
                       </div>
                        {(dirtyPhone && errorPhone) && <div className="reg-error-plase">{errorPhone}</div>}

                        <input
                            className="reg-input"
                            type="text"
                            name='phone'
                            id='phone'
                            onChange={e => phoneHangler(e)}
                            value={phone}
                            onBlur={e => blurHandler(e)}
                            placeholder="+375 ХХ ХХХ ХХ ХХ" />
                    </div>

                    <div className="reg-plase-input">
                        <div>
                        <img id="info-email" src={question2} className='label_question'></img>
                        <Tooltip anchorSelect="#info-email">
                          <p>Почта должна содержать в себе @ и домен (.ru/ .tut/ .gmail)</p>
                        </Tooltip>
                        <label className="reg-label">Почта</label>

                        </div>

                        {(dirtyEmail && errorEmail) && <div className="reg-error-plase">{errorEmail}</div>}

                        <input
                            className="reg-input"
                            type="text"
                            name='email'
                            id='email'
                            onChange={e => emailHangler(e)}
                            value={email}
                            onBlur={e => blurHandler(e)}
                            placeholder="gmail@gmail.com" />
                    </div>

                    <div className="reg-plase-input">
                        <div>
                        <img id="info-login" src={question2} className='label_question'></img>
                        <Tooltip anchorSelect="#info-login">
                          <p>Минимальная длинна логина - 3 символа, можно использовать латинские буквы, цифры и знаки: '_', '-'</p>
                        </Tooltip>
                        <label className="reg-label">Логин</label>
                        </div>
                        {(dirtyLogin && errorLogin) && <div className="reg-error-plase">{errorLogin}</div>}
                        <input
                            className="reg-input"
                            type="text"
                            name='login'
                            id='login'
                            onChange={e => loginHangler(e)}
                            value={login}
                            onBlur={e => blurHandler(e)}
                            placeholder="введите логин" />
                    </div>
                    <div className="reg-plase-input">
                        <div>
                        <img id="info-pass" src={question2} className='label_question'></img>
                        <Tooltip anchorSelect="#info-pass">
                          <p>Минимальная длинна пароля - 8 символов, можно использовать латинский алфавит и цифры</p>
                        </Tooltip>
                        <label className="reg-label">Пароль</label>
                        </div>
                        {(dirtyPassword && errorPassword) && <div className="reg-error-plase">{errorPassword}</div>}

                        <input
                            className="reg-input"
                            type="password"
                            name='password'
                            id='password'
                            onChange={e => passnHangler(e)}
                            value={password}
                            onBlur={e => blurHandler(e)}
                            placeholder="введите пароль" />
                    </div>
                    <div>
                        <button id="reg-btn" type="submit" className="reg-btn">Зарегистрироваться</button>
                        <div className='link-place'>
                            <p className='text-link-login'>У меня уже есть аккаунт. <Link to={`/login/`} className='login-link'>Вход</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistredComponent;