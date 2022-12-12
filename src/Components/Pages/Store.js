import { Fragment, useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import Products from '../../store/products'

const Store = (props) => {

    const cartCtx = useContext(CartContext);
    const [itemExist, setItemExist] = useState(false);
    const removeAlertHandler = () => {
        setItemExist(false);
    }

    const addItemToCarthandler = (item) => {
        const existItemIndex = cartCtx.items.findIndex((itm) => itm.id === item.id)
        if(existItemIndex !== -1){
            setItemExist(true);
            return;
        }
        cartCtx.addItem({
            id: item.id,
            title: item.title,
            price: item.price
        })
    }

    const itemsList = Products.map((itm) => {
        return (
            <div key={itm.id}>
                <div className="card" style={{ width: '20rem' }}>
                    <img src={itm.imageUrl} alt="itemImage.jpeg" />
                    <div className="card-body">
                        <div className="card-title">{itm.title}</div>
                        <span>Rs. {itm.price}</span>
                        <button className="btn btn-primary float-end" onClick={addItemToCarthandler.bind(null,itm)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            <section>
                <div className="d-flex justify-content-center">THE GENERICS</div>
            </section>
            <Modal show={itemExist} onHide={removeAlertHandler} centered><Modal.Body>ITEM ALREADY ADDED TO CART</Modal.Body></Modal>
            <section>
                <div className="row row-cols-2">{itemsList}</div>
            </section>
        </Fragment>
    );
}

export default Store;