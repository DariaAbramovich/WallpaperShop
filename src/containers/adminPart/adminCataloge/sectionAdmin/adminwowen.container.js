import styled from "styled-components";
import { AdminNavbar } from "../../adminNavbar/adminavbar";
import { AdminWowen } from "./adminwoven";
import { Header } from "../../../../components/header";
import { Footer } from "../../../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const WowenContainerAdmin = ({user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <AdminNavbar user={ user}/>
                    </div>   
            </Header>
            <AdminWowen/>
            <Footer/>
            </Wrapper>
        </>
    )
}