
import styled from "styled-components";
import AddProductComponent from "./addProduct.component";
import { Navbar } from "../../Navbar/navbar";
import { Header } from "../../../components/header";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`

export const AddProductContainer = () => {
    return (
        <>
                <Header>
                    <div className="container">
                        <Navbar />
                    </div>
                </Header>
                <AddProductComponent />
        </>
    )
}