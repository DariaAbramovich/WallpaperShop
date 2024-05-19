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


const HomeContainer = ({cartItemCount}) => {
    return (
        <>
            <HomeCompanent cartItemCount ={cartItemCount}/>
           
        </>
    );
}

export default HomeContainer;

