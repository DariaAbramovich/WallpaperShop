import { Container } from '../../components/container'
import { Navbar } from '../Navbar/navbar'
import { Search } from '../Search/search'
import { ProductsContainer } from './Products/products.container'
import './home.scss'

const HomeComponent = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Navbar />
                    <div className="header__content">
                        <h1 className="header__title">Безупречная жизнь начинается дома.</h1>
                        <p>Воплощайте вместе с нами свои самые яркие мечты!</p>
                        <Search />
                    </div>
                </div>
            </header>
            <ProductsContainer/>
           
        </>
    )
}
export default HomeComponent;

