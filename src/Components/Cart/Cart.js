import { Button, Modal } from "react-bootstrap";
import css from "./CartItem.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux-store/cart-slice/cart-slice";
import { useEffect } from "react";
import { postCartData } from "../../redux-store/http-request/http-request";

const Cart = (props) => {
    const cartArray = useSelector(state => state.cart.cart);
    const totalAmount = useSelector(state => state.cart.total);
    const dispatch = useDispatch();
    const hasItems = cartArray.length > 0;
    const cartSlice = useSelector(state => state.cart);
    const uID = useSelector(state => state.auth.uuID);

    useEffect(() => {
        // console.log('Post useEffect');
        dispatch(postCartData(cartSlice, uID));
    }, [dispatch, uID, cartSlice]);

    const cartItemRemoveHandler = (itm) => {
        dispatch(cartActions.removeItem({ item: itm }));
    };

    const cartItems = cartArray.map((itm) => (
        <CartItem
            key={itm.id}
            title={itm.title}
            price={itm.price}
            onRemove={cartItemRemoveHandler.bind(null, itm)}
        />
    ));
    const itemCartBody = <Modal.Body>{cartItems}</Modal.Body>;
    const emptyCartBody = <Modal.Body className="text-center">Cart is empty.</Modal.Body>

    const cartFooter = (
        <div>
            <div className="px-2">
                <span>Total Amount: </span>
                <span className={css.price}>Rs. {totalAmount}</span>
            </div>
            <Modal.Footer>
                <Button variant="dark">PURCHASE</Button>
            </Modal.Footer>
        </div>
    );

    return (
        <Modal show onHide={props.onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            {hasItems ? itemCartBody : emptyCartBody}
            {hasItems && cartFooter}
        </Modal>
    );
};

export default Cart;
