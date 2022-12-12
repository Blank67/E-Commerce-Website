import { Fragment } from "react";
import Products from '../../store/products'

const Store = (props) => {

    const itemsList = Products.map((itm) => {
        return (
            <div key={itm.id}>
                <div className="card" style={{ width: '20rem' }}>
                    <img src={itm.imageUrl} alt="itemImage.jpeg" />
                    <div className="card-body">
                        <span>Rs. {itm.price}</span>
                        <button className="btn btn-primary float-end">ADD TO CART</button>
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
            <section>
                <div className="row row-cols-2">{itemsList}</div>
            </section>
        </Fragment>
    );
}

export default Store;