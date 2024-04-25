import axios from 'axios'
import { useEffect, useState } from 'react'

// 'http://localhost/api/product.php'
// 'http://localhost/api/user.php'


const API = axios.create({
  baseURL: `http://localhost`,
});

const endpoints = {
  getProduct: '/api/product.php',
  getUsers: '/user.php',
}

export const ShopService =  {
    getProduct() {
    return API.get(endpoints.getProduct);
  },
  getUsers() {
    return API.get(endpoints.getUsers);
  },

  
};