import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import './login.scss'
import back from './../../assets/icon/back.png'

const LoginWrapper = styled.div`
background-color: #f0f0f0;
aspect-ratio: 1290 / 1004;
`
const LoginComponent = () =>{

    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = (e) => {
    
        axios.get('http://localhost/api/user.php', inputs).
            then(function (response) {
                console.log(response.data);
                setUsers(response.data);
                // navigate('/');
            })
    }

    const handleCange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    return(
        <div>
        <div >
          
          <div>
           
          </div>
          <form className="login-form" onSubmit={getUsers}>
                <Link to={'/'}>
                    <img src={back}  className='back'/>
                </Link>
                <h1 className='mainTitle'>
                    Вход в аккаунт
                </h1> 
                
                <div className='plase-input'>
                        <label className="label">Логин</label>
                        <input type="text" name="login"  id="login" onChange={handleCange} placeholder="введите логин" className="pole"/>
                        <label className="label">Пароль</label>
                        <input type="text" name="password" id="pass" onChange={handleCange}placeholder="введите пароль" className="pole"/>
                </div>
                {Array.isArray(users)
                    ? users.map((user, key) => {
                        let pass = document.getElementById('pass')
                        let login = document.getElementById('login')

                        for (var i in user) {   
                            console.log("lodin -",user.Login);
                            if(login.value !="" && pass.value != ""){
                                if(login.value == user.Login && pass.value == user.Password){
                                    navigate('/')
                                   break;
                                }
                                else {
                                    pass.style.cssText = `border: 3px solid red;`
                                    break;
                                }   
                            }
                        }
                        
                    }
                    )
                    : null}
                <div>
                <button className="logIn">Log in</button>
                <div className='link-place'>
                    <p  className='text-link'>У меня нет аккаунта.<Link to={`/registred/`} className='link'> Регистрация</Link></p>
                </div>
                </div>
          </form>
          </div>
        </div>
    )
}

export default LoginComponent;