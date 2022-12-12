import React, { Fragment } from "react";
import { NavLink } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    {/* Logo and Side button  */}
                    <NavLink href="#" className="navbar-brand">E-Commerce</NavLink>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar1" aria-controls="navBar1" aria-label="Expand Navigation">
                        <div className="navbar-toggler-icon" />
                    </button>

                    {/* NavBar Menus */}
                    <div className="collapse navbar-collapse" id="navBar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">Store</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">About</a>
                            </li>
                        </ul>
                    </div>

                    {/* Cart Button */}
                    <HeaderCartButton onHide={props.onHide} onShow={props.onShow} />
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;