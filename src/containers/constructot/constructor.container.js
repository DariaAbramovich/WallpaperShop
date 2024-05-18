import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import { Constructor } from "./constructor.companent"

export const ConstructorContainer = () => {
    return (
        <>
        <>
            <Header>
                    <div className="container">
                        <Navbar/>
                    </div>   
            </Header>
            <Constructor/>
            </>
        </>
    )
}