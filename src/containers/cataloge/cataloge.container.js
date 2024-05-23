import styled from "styled-components";
import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import CatalogeComponent from "./cataloge.component"
import { ChatBotContainer } from "../../components/chatBot/chat.container";
import { Footer } from "../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const CatalogeContainer = ({ addToCart,cartItemCount, user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount} user={user}/>
                    </div>   
            </Header>
            <CatalogeComponent  addToCart={ addToCart} />
            <ChatBotContainer/>
            <Footer/>
            </Wrapper>
        </>
    )
}