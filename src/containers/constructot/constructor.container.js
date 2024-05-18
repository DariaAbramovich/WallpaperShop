import { Header } from "../../components/header"
import { Navbar } from "../Navbar/navbar"
import ConstructorCompanent from "./constructor.companent"

export const ConstructorContainer = () => {
    return (
        <>
        <>
            <Header>
                    <div className="container">
                        <Navbar/>
                    </div>   
            </Header>
            <ConstructorCompanent/>
            </>
        </>
    )
}