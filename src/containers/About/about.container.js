import styled from "styled-components";
import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import { About } from "./about.component";
import { ChatBotContainer } from "../../components/chatBot/chat.container";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const AboutContainer = ({cartItemCount}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <About/>
            <ChatBotContainer/>
        </Wrapper>
        </>
    )
}