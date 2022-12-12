import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItemsCount = cartCtx.items.length;

    return (
        <Fragment>
            <button className="btn btn-outline-primary" onClick={props.onShow}>
                Cart
            <sup style={{color: 'white'}}>{cartItemsCount}</sup>
            </button>
        </Fragment>
    );
}

export default HeaderCartButton;