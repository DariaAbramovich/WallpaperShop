
import styled from "styled-components";
import AddProductComponent from "./addProduct.component";
import { Navbar } from "../../Navbar/navbar";
import { Header } from "../../../components/header";
import { AdminNavbar } from "../adminNavbar/adminavbar";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`

export const AddProductContainer = ({user}) => {
    return (
        <>
                <Header>
                    <div className="container" >
                        <AdminNavbar user={ user}/>
                    </div>
                </Header>
                <AddProductComponent />
        </>
    )
}