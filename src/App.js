
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components";
import axios from 'axios'
import {BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes, useLocation, useNavigate} from "react-router-dom";
import 'swiper/css';
import './css/App.css';
import './css/reset.css';
import './css/base.css';
import './css/vars.scss';
import React, {useEffect, useState} from "react";
import { ShopService } from './core/api';
import { CatalogeContainer } from "./containers/cataloge/cataloge.container";
import { ShopData } from "./core/api";
import { AddProductContainer } from "./containers/adminPart/addProduct/addProduct.container";
import { LoginContainer } from "./containers/LogIn/login.container";
import { RegistredContainer } from "./containers/LogIn/Registred/registred.container";

import store from './redux/store';
import { BasketContainer } from './containers/basket/basket.container';
import DetailListProductContainer from './containers/detailListProduct/detailListProduct.container';
import { ProductsContainer } from './containers/Home/Products/products.container'; 
import AdminHomeContainer from './containers/adminPart/adminHome/adminhome.container';
import { AdminCatalogeContainer } from './containers/adminPart/adminCataloge/adminCcataloge.container';
import HomeContainer from './containers/Home/home.container';
import { ConstructorContainer } from './containers/constructot/constructor.container';
import { Vinil } from './containers/cataloge/section/vinil/vinil';
import { Paper } from './containers/cataloge/section/paper/paper';
import { NonWowen } from './containers/cataloge/section/woven';
import { C } from './containers/constructot/c';
import Cart from './components/cart';
import { Navbar } from './containers/Navbar/navbar';
import { WowenContainer } from './containers/cataloge/section/wowen.container';
import { PaperContainer } from './containers/cataloge/section/paper/paper.container';
import { VinilContainer } from './containers/cataloge/section/vinil/vinil.container';
import { Footer } from './containers/Footer/footer';
import { AboutContanret } from './containers/About/about.container';
import ChatBot from './components/chatBot/chatBot';

import { ChatBotContainer } from './components/chatBot/chat.container';


const colors = {
  bgColor: '#0D1B39',
  // bgColorLight: '#212121',
  // bgColorAccent: '#3DD2CC',
  // textColor: '#666',
  // textColorAccent: '#3dd2cc',
}

const breakpoints = {
  xLarge: '1350px',
  large: '1200px',
  medium: '992px',
  tablet: '768px',
  mobileXL: '540px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
}

const theme = {
  ...colors,
  ...breakpoints,
}



const App = ()=>{
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
    }
}, []);

useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

const addToCart = (item) => {
  setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
          (cartItem) =>
              cartItem.nameproduct === item.nameproduct &&
              cartItem.type === item.type &&
              cartItem.colorProduct === item.colorProduct &&
              cartItem.image === item.image &&
              cartItem.widthProduct === item.widthProduct
      );

      if (existingItemIndex > -1) {
          const updatedCart = [...prevCartItems];
          updatedCart[existingItemIndex].quantity += 1;
          return updatedCart;
      } else {
          return [...prevCartItems, { ...item, quantity: 1 }];
      }
  });
};
const removeAllItems = () => {
  setCartItems([]);
};
const removeFromCart = (index) => {
  setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
};

const updateQuantity = (index, quantity) => {
  setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];
      if (quantity > 0) {
          updatedCart[index].quantity = quantity;
      } else {
          updatedCart.splice(index, 1);
      }
      return updatedCart;
  });
};

const getTotalItems = () => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

  return (
   
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeContainer cartItemCount={getTotalItems()}/>} />
            <Route path="/login/" element={<LoginContainer/>} />
            <Route path="/registred/" element={<RegistredContainer/>} />
            <Route path="/constructor/" element={<ConstructorContainer addToCart={addToCart} cartItemCount={getTotalItems()}/>} />
            <Route path="cataloge/" element={<CatalogeContainer  addToCart={addToCart} cartItemCount={getTotalItems()}/>} />
            <Route path="/nonWoven/" element={<WowenContainer  addToCart={ addToCart} cartItemCount={getTotalItems()}/>} />
            <Route path="/vinil/" element={<VinilContainer addToCart={ addToCart} cartItemCount={getTotalItems()}/>} />
            <Route path="/paperwall/" element={<PaperContainer addToCart={ addToCart} cartItemCount={getTotalItems()}/>} />
            <Route path="/about/" element={<AboutContanret cartItemCount={getTotalItems()}/>} />
            <Route path="/cart/" element={<BasketContainer cartItems={cartItems}  removeFromCart={removeFromCart} updateQuantity={updateQuantity} cartItemCount={getTotalItems()} removeAllItems={removeAllItems}/>} />
            
            <Route path="/admin/" element={<AdminHomeContainer />}  />
            <Route path="admin:cataloge/" element={<AdminCatalogeContainer/>} />
            <Route path="/addedproducts/" element={<Paper    />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
   
  );
}

export default App;
