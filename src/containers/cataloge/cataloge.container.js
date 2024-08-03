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
export const CatalogeContainer = ({ addToCart,cartItemCount, user, setUser,language,setLanguage, cartItems,setCartItems}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount} user={user} setUser={setUser} language={language} setLanguage={setLanguage} cartItems={cartItems} 
    setCartItems={setCartItems}/>
                    </div>   
            </Header>
            <CatalogeComponent  addToCart={ addToCart} user={user} setUser={setUser} language={language} />
            <ChatBotContainer language={language}/>
            <Footer language={language}/>
            </Wrapper>
        </>
    )
}