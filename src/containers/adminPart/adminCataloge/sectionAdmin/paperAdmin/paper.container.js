import styled from "styled-components";
import { AdminPaper, Paper } from "./paper";
import { AdminNavbar } from "../../../adminNavbar/adminavbar";
import { Header } from "../../../../../components/header";
import { Footer } from "../../../../Footer/footer";

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
// background-color: grey;

`
export const AdminPaperContainer = ({user}) => {
    return (
        <>
        <Wrapper>
            <Header>
                    <div className="container">
                        <AdminNavbar user={ user}/>
                    </div>   
            </Header>
            <AdminPaper/>
            <Footer/>
            </Wrapper>
        </>
    )
}