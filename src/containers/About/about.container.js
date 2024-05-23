import styled from "styled-components";
import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import { About } from "./about.component";
import { ChatBotContainer } from "../../components/chatBot/chat.container";
import { Footer } from "../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const AboutContainer = ({cartItemCount, user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount} user={user}/>
                    </div>   
            </Header>
            <About/>
            <ChatBotContainer/>
            <Footer/>
        </Wrapper>
        </>
    )
}