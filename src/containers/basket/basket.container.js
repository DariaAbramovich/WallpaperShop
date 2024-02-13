import { Header } from "../../components/header";
import { Navbar } from "../Navbar/navbar";
import BasketComponent from "./basket.component"
import styled from "styled-components";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
aspect-ratio: 1290 / 1004;
`
export const BasketContainer = () => {
    return (
        <>
            <Wrapper>
                <Header>
                    <div className="container">
                        <Navbar />
                    </div>
                </Header>
                <BasketComponent />
            </Wrapper>
        </>
    )
}