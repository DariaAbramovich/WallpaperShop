
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components";
import axios from 'axios'
import {BrowserRouter, createBrowserRouter, Navigate, Route, Router, RouterProvider, Routes, useLocation, useNavigate} from "react-router-dom";
import 'swiper/css';
import './css/App.css';
import './css/reset.css';
import './css/base.css';
import './css/vars.scss';
import React, {useEffect, useState} from "react";
import { LoginContainer } from "./containers/LogIn/login.container";
import { RegistredContainer } from "./containers/LogIn/Registred/registred.container";

import { BasketContainer } from './containers/basket/basket.container';
import AdminHomeContainer from './containers/adminPart/adminHome/adminhome.container';
import { AdminCatalogeContainer } from './containers/adminPart/adminCataloge/adminCcataloge.container';
import { Paper } from './containers/cataloge/section/paper/paper';
import { WowenContainer } from './containers/cataloge/section/wowen.container';
import { PaperContainer } from './containers/cataloge/section/paper/paper.container';
import { VinilContainer } from './containers/cataloge/section/vinil/vinil.container';
import { Footer } from './containers/Footer/footer';
import HomeContainer from './containers/Home/home.container';
import { CatalogeContainer } from './containers/cataloge/cataloge.container';
import { AboutContainer } from './containers/About/about.container';
import { ConstructorContainer } from './containers/constructot/constructor.container';

import top from './assets/icon/top.png'
import { AboutContainerAdmin } from './containers/adminPart/aboutAdmin/About/about.container';
import { WowenContainerAdmin } from './containers/adminPart/adminCataloge/sectionAdmin/adminwowen.container';
import { AdminVinilContainer } from './containers/adminPart/adminCataloge/sectionAdmin/vinilAdmin/vinil.container';
import { AdminPaperContainer } from './containers/adminPart/adminCataloge/sectionAdmin/paperAdmin/paper.container';
import { AddProductContainer } from './containers/adminPart/addProduct/addProduct.container';
import CheckoutForm from './containers/basket/checkOutForm.component';

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
  const [cartItems, setCartItems] = useState([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false); // State to manage scroll to top button visibility
  // const [user, setUser] = useState(null); // State to store logged-in user data
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); // State to store logged-in user data
 
  const [isChatBotVisible, setIsChatBotVisible] = useState(true); // Initialize chatbot as visible by default
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
    }
}, []);

useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };
  // useEffect(() => {
  //   const userParam =()=>{
  //   if (location.pathname === '/login' || location.pathname === '/registred') {
  //     setIsChatBotVisible(false);
  //   } else {
  //     setIsChatBotVisible(true);
  //   }
  //   }
  // }, [location]);


  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

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

const handleSetUser = (userData) => {
  setUser(userData);
  localStorage.setItem('user', JSON.stringify(userData));
};
  return (
   
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeContainer cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/>} />
            <Route path="/login/" element={<LoginContainer setUser={handleSetUser}/>} />
            <Route path="/registred/" element={<RegistredContainer/>} />
            <Route path="/constructor/" element={user ? <ConstructorContainer user={user} setUser={handleSetUser} addToCart={addToCart} cartItemCount={getTotalItems()} /> : <Navigate to="/login" />} />
            <Route path="cataloge/" element={<CatalogeContainer  addToCart={addToCart} cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/>} />
            <Route path="/nonWoven/" element={<WowenContainer  addToCart={ addToCart} cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/>} />
            <Route path="/vinil/" element={<VinilContainer addToCart={ addToCart} cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/> } />
            <Route path="/paperwall/" element={<PaperContainer addToCart={ addToCart} cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/>} />
            <Route path="/about/" element={<AboutContainer cartItemCount={getTotalItems()} user={user} setUser={handleSetUser}/>} />
            <Route path="/cart/" element={user ? 
                                    <BasketContainer user={user} setUser={handleSetUser} cartItems={cartItems}  removeFromCart={removeFromCart} updateQuantity={updateQuantity} cartItemCount={getTotalItems()} removeAllItems={removeAllItems} />
                                    : <Navigate to="/login" />} />
            
            <Route path="/admin/" element={<AdminHomeContainer user={user} setUser={handleSetUser} />}  />
            <Route path="/admin:cataloge/" element={<AdminCatalogeContainer  user={user} />} />
            <Route path="/admin:nonWoven/" element={<WowenContainerAdmin  user={user}/>} />
            <Route path="/admin:vinil/" element={<AdminVinilContainer  user={user}/>} />
            <Route path="/admin:paperwall/" element={<AdminPaperContainer  user={user}/>} />
            <Route path="/addedproducts/" element={<AddProductContainer  user={user}/>} />
            <Route path="/admin:aboute/" element={<AboutContainerAdmin  user={user}/>} />
            <Route path="/payment/" element={<CheckoutForm/>}/>


        </Routes>
        {showScrollToTop && (
            <button className="scroll-to-top-button" onClick={scrollToTop}>
              <img className='scroll-to-top-img' src={top}></img>
            </button>
          )}
        {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </ThemeProvider>
   
  );
}

export default App;
