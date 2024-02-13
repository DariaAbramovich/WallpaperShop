import React, { Component } from 'react';

import { Footer } from '../Footer/footer.js'
import { Products } from './Products/products.component.js'
import { ProductsContainer } from './Products/products.container.js'
import HomeCompanent from './home.component.js'
import { Container } from '../../components/container.js';

const HomeContainer = () => {
    return (
        <>
        {/* <Container> */}
            <HomeCompanent />
            <Footer />
        {/* </Container> */}
        </>
    )

}

export default HomeContainer;

