import styled from "styled-components";
import { About, AboutAdmin } from "./about.component";
import { AdminNavbar } from "../../adminNavbar/adminavbar";
import { Footer } from "../../../Footer/footer";
import { Header } from "../../../../components/header";
import { ChatBotContainer } from "../../../../components/chatBot/chat.container";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const AboutContainerAdmin = ({cartItemCount}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <AdminNavbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <AboutAdmin/>
            <Footer/>
        </Wrapper>
        </>
    )
}