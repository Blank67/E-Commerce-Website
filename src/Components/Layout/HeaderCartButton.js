import { Fragment } from "react";

const HeaderCartButton = (props) => {
    return (
        <Fragment>
            <button className="btn btn-outline-primary" onClick={props.onShow}>
                Cart
            <sup style={{color: 'white'}}>0</sup>
            </button>
        </Fragment>
    );
}

export default HeaderCartButton;