import { useParams } from "react-router-dom";
import Products from '../../store/products'

const ProductDetails = (props) => {

    const params = useParams();
    const product = Products.find((itm) => itm.id === params.productId);

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
                    <div className="card-body">
                        {/* <button className="btn btn-primary float-end" onClick={addItemToCarthandler.bind(null, itm)}>ADD TO CART</button> */}
                    </div>
                </div>
            </div>
            <div className="">
                <h2>{product.title}</h2>
                <span>Price: Rs. {product.price}</span>
                <p>Some demo details of the product: {product.title}.</p>
            </div>
        </section>
    );
}

export default ProductDetails;