
    
import Cart from "../../components/cart";
import { ChatBotContainer } from "../../components/chatBot/chat.container";
import { Header } from "../../components/header";
import { Footer } from "../Footer/footer";
import { Navbar } from "../Navbar/navbar";
import BasketComponent from "./basket.component";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(239, 239, 239);
  aspect-ratio: 1290 / 1004;
`;

export const BasketContainer = ({
  user,
  setUser,
  cartItems,
  setCartItems,
  removeFromCart,
  updateQuantity,
  cartItemCount,
  removeAllItems,
  language,
  setLanguage
}) => {
  return (
    <>
      <Wrapper>
        <Header>
          <div className="container">
            <Navbar
              cartItemCount={cartItemCount}
              user={user}
              setUser={setUser}
              language={language}
              setLanguage={setLanguage}
             cartItems={cartItems} 
              setCartItems={removeAllItems} // Ensure setCartItems is passed correctly
            />  
          </div>
        </Header>
        <BasketComponent
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          removeAllItems={removeAllItems}
          user={user}
        />
        <ChatBotContainer />
        <Footer />
      </Wrapper>
    </>
  );
};
