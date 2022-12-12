import { Modal } from "react-bootstrap";
import PRODUCTS from "../../store/products";

const Cart = (props) => {
    return (
        <Modal show onHide={props.onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {PRODUCTS.map((itm) => (<li>{itm.title}</li>))}
                <br />
                <span>Total Amount: Rs. 0</span>
            </Modal.Body>
            <Modal.Footer>
                <span className="float-start">BUY BUTTON</span>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart;