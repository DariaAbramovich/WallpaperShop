import styled from "styled-components";
import { Header } from "../../../components/header";
import { Navbar } from "../../Navbar/navbar";
import { NonWowen } from "./woven";
import { ChatBotContainer } from "../../../components/chatBot/chat.container";
import { Footer } from "../../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const WowenContainer = ({addToCart,cartItemCount,user,setUser}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount} user={user} setUser={setUser}/>
                    </div>   
            </Header>
            <NonWowen addToCart={addToCart}/>
            <ChatBotContainer/>
            <Footer/>
            </Wrapper>
        </>
    )
}