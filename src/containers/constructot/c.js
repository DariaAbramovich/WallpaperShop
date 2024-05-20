import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ChatBot from './ChatBot'; // Assuming ChatBot component is in a separate file
import LoginContainer from './LoginContainer'; // Import your login container component
import RegistredContainer from './RegistredContainer'; // Import your registred container component
import Footer from './Footer';
import chatIcon from './chatIcon.png'; // Assuming you have an icon for the chat button
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isChatBotVisible, setIsChatBotVisible] = useState(false); // State to manage chat bot visibility

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Routes for different pages */}
            <Route path="/" element={<HomeContainer cartItemCount={getTotalItems()} />} />
            <Route path="/about/" element={<AboutContainer cartItemCount={getTotalItems()} />} />
            <Route path="/constructor/" element={<ConstructorContainer cartItemCount={getTotalItems()} />} />
            <Route path="/catalog/" element={<CatalogContainer cartItemCount={getTotalItems()} />} />
            <Route path="/cart/" element={<CartContainer cartItems={cartItems} />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/registred" element={<RegistredContainer />} />
          </Routes>

          {/* Conditionally render ChatBot based on current route */}
          {window.location.pathname !== '/login' && window.location.pathname !== '/registred' && isChatBotVisible && <ChatBot />}

          {/* Chat toggle button */}
          {window.location.pathname !== '/login' && window.location.pathname !== '/registred' && (
            <button className="chat-toggle-button" onClick={toggleChatBot}>
              <img src={chatIcon} alt="Chat" />
            </button>
          )}

          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
