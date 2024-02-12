import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './registred.scss'
import { Link } from "react-router-dom";


const RegistredComponent = () => {

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
    // function checkData() {
    //     if (nameUser.value !== "" && surName.value !== "" && phone.value !== "" && email.value !== "" && login.value !== "" && password.value !== "") {

    //     }
    //     else {
    //         setError(' All fields are required!');
    //     }

        
    // }
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
                    <p className="plase-error">
                        {
                            msg !== "" ?
                                <span>{msg}</span> :
                                <span>{error}</span>
                        }
                    </p>
                    <div className="plase-input">
                        <label className="labels">Имя</label>
                        <input
                            className="reg-input"
                            type="text"
                            name='name'
                            id='name'
                            onChange={handleCange}
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