import LoginComponent from "./login.comoinent"
import styled from "styled-components";
import './login.scss'
import { Container } from "../../components/container";
export const LoginContainer = () => {
    return (
    <>
            <div className='wrapper-login'>
                <LoginComponent/>
            </div>
    </>
)}