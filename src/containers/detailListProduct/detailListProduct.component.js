import BasketCard from '../../components/basket-card';
import './DetailListProductContainer.scss';
import { connect } from 'react-redux';

const DetailListProductCompanent = ({ items, total }) => {

    return (
        <>
            <div className="container">
               
            </div>
        </>
    )

}
// const mapStateToProps = ({ delate: {  delatetItems }}) => ({
//     items: delatetItems,
//     total:  delatetItems.reduce((acc, item) => acc += item.priceProduct * item.quantity, 0)
// });

export default DetailListProductCompanent;
