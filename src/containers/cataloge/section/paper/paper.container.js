import styled from "styled-components";
import { Header } from "../../../../components/header";
import { Navbar } from "../../../Navbar/navbar";
import { Paper } from "./paper";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const PaperContainer = ({addToCart,cartItemCount}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <Paper addToCart={addToCart}/>
            </Wrapper>
        </>
    )
}