import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './registred.scss'
import { Link } from "react-router-dom";


const RegistredComponent = () => {

    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [dirtyName, setDirtyName] = useState(false);
    const [dirtySurName, setDirtySurName] =useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [dirtyLogin, setDirtyLogin] = useState(false);
    const [dirtyPassword, setDirtyPassword] = useState(false);

    const [errorName, setErrorName] = useState("Поле имя не должно быть пустым");
    const [errorSurName, setErrorSurName] =useState("Поле фамилия не должно быть пустым");
    const [errorPhone, setErrorPhone] = useState("Поле телефон не должно быть пустым");
    const [errorEmail, setErrorEmail] = useState("Поле почта не должно быть пустым");
    const [errorLogin, setErrorLogin] = useState("Поле логин не должно быть пустым");
    const [errorPassword, setErrorPassword] = useState("Поле пароль не должно быть пустым");

    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    useEffect(() => {
        setTimeout(function () {
            setMsg("");
        }, 1500)
    }, [msg])

    const [inputs, setInputs] = useState({})

    const handleCange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
   
    const nameHangler = (e) =>{
        setName(e.target.value);
        const re = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        if(re.test(e.target.value)){
            setErrorName("");
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        else{
            setErrorName("Некорректное имя");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/api/user.php', inputs).
            then(function (response) {
                console.log(response.data)
                console.log(inputs)
                // navigate('/')
            })
            .then((response) => {
                setMsg(response[0].result);
                console.log(response)

            }).catch((err) => {
                console.log(err);
            })
    }

    const blurHandler = (e) =>{
        switch(e.target.name){
            case 'name':
                setDirtyName(true);
            break;
        }
    }
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     if(name !== "" && surName !== "" && phone !== "" && email !== "" && login !== "" &&  password !== "" ){

    //         let url = "http://localhost/api/user.php";
    //         let Data = {
    //             name : name,
    //             surName: surName,
    //             phone: phone,
    //             email:email,
    //             login:login,
    //             password:password,
    //         }
    //         fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(Data)
    //         })
    //         .then((response) => response.json())
    //         .then((response)=>{
    //             setMsg(response[0].result);
    //             console.log(response)

    //         }).catch((err)=>{
    //             console.log(err);
    //         })
    //         setName("");
    //         setSurName("");
    //         setPhone("");
    //         setEmail("");
    //         setLogin("");
    //         setPassword("");
    //     }

    //     else{
    //         setError(' error: All fields are required!');
    //     }
    // }
    // const hendleInputChange = (e, type) =>{
    //     switch (type) {
    //         case 'name':
    //             setError("");
    //             setName(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("Name has left blank");
    //             }
    //         break;
    //         case 'surName':
    //             setError("");
    //             setSurName(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("surname has left blank");
    //             }
    //         break;
    //         case 'phone':
    //             setError("");
    //             setPhone(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("phone has left blank");
    //             }
    //         break;
    //         case 'email':
    //             setError("");
    //             setEmail(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("email has left blank");
    //             }
    //         break;
    //         case 'login':
    //             setError("");
    //             setLogin(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("login has left blank");
    //             }
    //         break;
    //         case 'password':
    //             setError("");
    //             setPassword(e.target.value);
    //             if(e.target.value === ""){
    //                 setError("password has left blank");
    //             }
    //         break;
    //     }

    // }
    return (
        <>
            <div className="reg-wrapper">
                <form className="reg-form" onSubmit={handleSubmit}>
                    <h1 className="reg-title">Создание аккаунта</h1>
                    {/* <p className="plase-error">
                        {
                            msg !== "" ?
                                <span>{msg}</span> :
                                <span>{error}</span>
                        }
                    </p> */}
                    <div className="plase-input">
                        <label className="labels">Имя</label>
                        { (dirtyName && errorName) && <div style={{color:'red'}}>{errorName}</div>}
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

                    <div className="plase-input">
                        <label className="labels">Фамилия</label>
                        <input
                            className="reg-input"
                            type="text"
                            name='surName'
                            id='surName'
                            onChange={handleCange}
                            placeholder="введите фамилию" />
                    </div>

                    <div className="plase-input">
                        <label className="labels">Телефон</label>
                        <input
                            className="reg-input"
                            type="text"
                            name='phone'
                            id='phone'
                            onChange={handleCange}
                            placeholder="+375 ХХ ХХХ ХХ ХХ" />
                    </div>

                    <div className="plase-input">
                        <label className="labels">Почта</label>
                        <input
                            className="reg-input"
                            type="text"
                            name='email'
                            id='email'
                            onChange={handleCange}
                            placeholder="gmail@gmail.com" />
                    </div>

                    <div className="plase-input">
                        <label className="labels">Логин</label>
                        <input
                            className="reg-input"
                            type="text"
                            name='login'
                            id='login'
                            onChange={handleCange}
                            placeholder="введите логин" />
                    </div>
                    <div className="plase-input">
                        <label className="labels">Пароль</label>
                        <input
                            className="reg-input"
                            type="password"
                            name='password'
                            id='password'
                            onChange={handleCange}
                            placeholder="введите пароль" />
                    </div>
                    <div>
                        <button type="submit" className="reg">Зарегистрироваться</button>
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