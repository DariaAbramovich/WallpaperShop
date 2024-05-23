import styled from "styled-components";
import { AdminNavbar } from "../adminNavbar/adminavbar";
import { Header } from "../../../components/header";
import AdminCatalogeComponent from "./adminCataloge.component";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const AdminCatalogeContainer = ({user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container" >
                        <AdminNavbar user={ user}/>
                    </div>   
            </Header>
            <AdminCatalogeComponent />
            </Wrapper>
        </>
    )
}