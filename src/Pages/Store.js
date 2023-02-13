import { Fragment, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from '../store/products'
import Jumbotron from "../Components/Layout/Jumbotron";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux-store/cart-slice/cart-slice";
import { fetchCartData, postCartData } from "../redux-store/http-request/http-request";

const Store = (props) => {

    const cartArray = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const cartSlice = useSelector(state => state.cart);
    const uID = useSelector(state => state.auth.uuID);
    const [itemExist, setItemExist] = useState(false);

    useEffect(() => {
        console.log('Get useEffect');
        dispatch(fetchCartData((uID)));
    }, [dispatch, uID]);

    useEffect(() => {
        console.log('Post useEffect');
        dispatch(postCartData(cartSlice, uID));
    }, [dispatch, uID, cartSlice]);

    const removeAlertHandler = () => {
        setItemExist(false);
    }

    const addItemToCarthandler = (item) => {
        const existItemIndex = cartArray.findIndex((itm) => itm.id === item.id)
        if (existItemIndex !== -1) {
            setItemExist(true);
            return;
        }
        const product = {
            id: item.id,
            title: item.title,
            price: item.price
        }
        dispatch(cartActions.addItem({ item: product }));
    }

    const itemsList = Products.map((itm, index) => {
        return (
            <div key={itm.id} className="d-flex justify-content-center">
                <div className="card my-3" style={{ width: '16rem' }}>
                    <div className="card-header text-center">Album {index + 1}</div>
                    {/* <div className="bg-image hover-zoom">
                        <img className="w-100" src={itm.imageUrl} alt="itemImage.jpeg" />
                    </div> */}
                    <img src={itm.imageUrl} alt="itemImage.jpeg" />
                    <div className="card-body">
                        <Link to={`/store/${itm.id}`}>
                            <div className="card-title">{itm.title}</div>
                        </Link>
                        <span>Rs. {itm.price}</span>
                        <button className="btn btn-primary float-end" onClick={addItemToCarthandler.bind(null, itm)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            <section><Jumbotron heading="The Generics" /></section>
            <h1 className="text-center m-2">Music</h1>
            <Modal show={itemExist} onHide={removeAlertHandler} centered><Modal.Body className="text-center">ITEM ALREADY ADDED TO CART</Modal.Body></Modal>
            <section className="d-flex justify-content-center">
                <div className="row row-cols-2">{itemsList}</div>
            </section>
        </Fragment>
    );
}

export default Store;