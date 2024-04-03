
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components";
import axios from 'axios'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'swiper/css';
import './css/App.css';
import './css/reset.css';
import './css/base.css';
import './css/vars.scss';

import { CatalogeContainer } from "./containers/cataloge/cataloge.container";
import { ShopData } from "./core/api";
import { AddProductContainer } from "./containers/adminPart/addProduct/addProduct.container";
import { LoginContainer } from "./containers/LogIn/login.container";
import { RegistredContainer } from "./containers/LogIn/Registred/registred.container";
import HomeContainer from "./containers/Home/home.container";
import store from './redux/store';
import { BasketContainer } from './containers/basket/basket.container';
import DetailListProductContainer from './containers/detailListProduct/detailListProduct.container';
import { ProductsContainer } from './containers/Home/Products/products.container'; 
import AdminHomeContainer from './containers/adminPart/adminHome/adminhome.container';
import { AdminCatalogeContainer } from './containers/adminPart/adminCataloge/adminCcataloge.container';
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer/>
  },
  {
    path: "/admin/",
    element: <AdminHomeContainer/>
  },
  {
    path:'login/',
    element: <LoginContainer/>
  },
  {
    path:'registred/',
    element: <RegistredContainer/>
  },
  {
    path: "cataloge/",
    element: <CatalogeContainer/>,
  },
  {
    path: "admin:cataloge/",
    element: <AdminCatalogeContainer/>,
  },
  {
    path: "/addedproducts/",
    element: <AddProductContainer/>
  },
  {
    path: "/basket/",
    element: <BasketContainer/>
  },
  { 
    path:'/detailpage/',
    element: <DetailListProductContainer/>,
  }

]);


function App() {
  return (
   
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
   
  );
}

export default App;
