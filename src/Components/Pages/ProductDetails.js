import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Products from '../../store/products'

const ProductDetails = (props) => {

    const params = useParams();
    const cartCtx = useContext(CartContext);
    const product = Products.find((itm) => itm.id === params.productId);
    const [itemExist, setItemExist] = useState(false);

    const removeAlertHandler = () => {
        setItemExist(false);
    }
    const addToCartHandler = (item) => {
        const existItemIndex = cartCtx.items.findIndex((itm) => itm.id === item.id)
        if (existItemIndex !== -1) {
            setItemExist(true);
            return;
        }
        cartCtx.addItem({
            id: item.id,
            title: item.title,
            price: item.price
        })
    }

    if (!product) {
        return <h1 className="text-center">Page Not found!</h1>
    }

    return (
        <section className="mx-5">
            <div key={product.id}>
                <div className="card my-3 border-0" style={{ width: '20rem' }}>
                    {/* <a href={product.imageUrl} className="MagicZoom" data-options="zoomWidth:400px; zoomHeight:400px">
                        <img src={product.imageUrl} alt="itemImage.jpeg" />
                    </a> */}
                    <img src={product.imageUrl} alt="itemImage.jpeg" />
                </div>
            </div>
            <div className="">
                <h2>{product.title}</h2>
                <span>Price: Rs. {product.price}</span>
                <p>Some demo details of the product: {product.title}.</p>
                <button className="mb-5" onClick={addToCartHandler.bind(null, product)}>Add to Cart</button>
            </div>
            <Modal show={itemExist} onHide={removeAlertHandler} centered><Modal.Body className="text-center">ITEM ALREADY ADDED TO CART</Modal.Body></Modal>
        </section>
    );
}

export default ProductDetails;