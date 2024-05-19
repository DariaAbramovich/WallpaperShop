
import styled from "styled-components";
import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import {Constructor} from './constructor.companent.js'
const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const ConstructorContainer = ({ addToCart, cartItemCount }) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <Constructor addToCart={addToCart}/>
            </Wrapper>
        </>
    )
}