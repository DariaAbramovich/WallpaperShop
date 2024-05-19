import styled from "styled-components";
import { Header } from "../../../components/header";
import { Navbar } from "../../Navbar/navbar";
import { NonWowen } from "./woven";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const WowenContainer = ({addToCart,cartItemCount}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <NonWowen addToCart={addToCart}/>
            </Wrapper>
        </>
    )
}