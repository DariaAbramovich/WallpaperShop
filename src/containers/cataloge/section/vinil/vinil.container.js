import styled from "styled-components";
import { Header } from "../../../../components/header";
import { Vinil } from "./vinil";
import { Navbar } from "../../../Navbar/navbar";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const VinilContainer = ({addToCart,cartItemCount}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <Vinil addToCart={addToCart}/>
            </Wrapper>
        </>
    )
}