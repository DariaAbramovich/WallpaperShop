import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import {Constructor} from './constructor.companent.js'

export const ConstructorContainer = ({ addToCart, cartItemCount }) => {
    return (
        <>
        <>
            <Header>
                    <div className="container">
                        <Navbar cartItemCount={cartItemCount}/>
                    </div>   
            </Header>
            <Constructor addToCart={addToCart}/>
            </>
        </>
    )
}