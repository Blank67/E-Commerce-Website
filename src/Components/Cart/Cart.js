import { useContext } from "react";
import { Modal } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {

    }
    const cartItems = cartCtx.items.map((itm) => (<CartItem key={itm.id} title={itm.title} price={itm.price} onRemove={cartItemRemoveHandler.bind(null,itm.id)} />));

    return (
        <Modal show onHide={props.onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            {hasItems && <Modal.Body>{cartItems}</Modal.Body>}
            {!hasItems && <Modal.Body>Cart is empty.</Modal.Body>}
            {hasItems && <Modal.Footer><span>Total Amount: Rs. {cartCtx.totalAmount}</span><span className="float-start">BUY BUTTON</span></Modal.Footer>}
        </Modal>
    );
}

export default Cart;