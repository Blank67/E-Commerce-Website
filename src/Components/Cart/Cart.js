import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import css from "./CartItem.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItems = cartCtx.items.map((itm) => (
        <CartItem
            key={itm.id}
            title={itm.title}
            price={itm.price}
            onRemove={cartItemRemoveHandler.bind(null, itm.id)}
        />
    ));
    const itemCartBody = <Modal.Body>{cartItems}</Modal.Body>;
    const emptyCartBody = <Modal.Body className="text-center">Cart is empty.</Modal.Body>
    const cartFooter = (
        <div>
            <div className="px-2">
                <span>Total Amount: </span>
                <span className={css.price}>Rs. {cartCtx.totalAmount}</span>
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
