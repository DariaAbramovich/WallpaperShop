import React from 'react';
import { Component } from 'react';
import { useEffect, useState } from 'react'

import { Footer } from '../Footer/footer.js'
import { Products } from './Products/products.component.js'
import { ProductsContainer } from './Products/products.container.js'
import HomeCompanent from './home.component.js'
import { Container } from '../../components/container.js';
import { ShopService } from '../../core/api.js';
import Card from '../../components/card.js';
import { ChatBotContainer } from '../../components/chatBot/chat.container.js';


const HomeContainer = ({cartItemCount, user, setUser}) => {
    return (
        <>
        {/* {user ? (
        <div>
          <h2>Hello, {user.NamePerson}</h2>
          <p>Email: {user.Email }</p>
        </div>
      ) : (
        <p>Please log in to see your details.</p>
      )} */}
          <HomeCompanent cartItemCount ={cartItemCount} user={ user} setUser={setUser} />
           <ChatBotContainer/>
           <Footer/>
        </>
    );
}

export default HomeContainer;

