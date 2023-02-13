import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {

    const cartArray = useSelector(state => state.cart.cart);
    const cartItemsCount = cartArray.length;
    const uID = useSelector(state => state.auth.uuID);

    return (
        <Fragment>
            <button className="btn btn-outline-primary ms-sm-3" onClick={props.onShow}>
                Cart
                <sup style={{ color: 'white' }}>{cartItemsCount}</sup>
            </button>
        </Fragment>
    );
}

export default HeaderCartButton;