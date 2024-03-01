
import { connect } from 'react-redux';
import DetailListProductCompanent from './detailListProduct.component';
import styled from "styled-components";
import { Navbar } from '../Navbar/navbar';
import { Header } from '../../components/header';

const Wrapper = styled.div`
background-color: rgb(239, 239, 239);
aspect-ratio: 1290 / 1004;
`
const DetailListProductContainer = () => {
    return (
        <div>
            <Wrapper>
                <Header>
                    <div className="container">
                        <Navbar />
                    </div>
                </Header>
                <DetailListProductCompanent />
            </Wrapper>

        </div>
    )
}
export default DetailListProductContainer