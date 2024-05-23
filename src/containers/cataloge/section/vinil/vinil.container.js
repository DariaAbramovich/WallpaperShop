import styled from "styled-components";
import { Header } from "../../../../components/header";
import { Vinil } from "./vinil";
import { Navbar } from "../../../Navbar/navbar";
import { ChatBotContainer } from "../../../../components/chatBot/chat.container";
import { Footer } from "../../../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const VinilContainer = ({addToCart,cartItemCount,user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount} user={user}/>
                    </div>   
            </Header>
            <Vinil addToCart={addToCart} />
            <ChatBotContainer/>
            <Footer/>
            </Wrapper>
        </>
    )
}