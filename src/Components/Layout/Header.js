import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { authActions } from "../../redux-store/auth-slice/auth-slice";
import { cartActions } from "../../redux-store/cart-slice/cart-slice";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    const loginStatus = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        dispatch(cartActions.clearCartOnLogout());
        history.replace('/');
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <div className="container"> */}

                {/* Logo and Side button  */}
                <button className="navbar-toggler ms-3" data-bs-toggle="collapse" data-bs-target="#navBar1" aria-controls="navBar1" aria-label="Expand Navigation">
                    <div className="navbar-toggler-icon" />
                </button>
                <NavLink to='/about' className="navbar-brand ms-3">E-Commerce</NavLink>

                {/* NavBar Menus */}
                <div className="collapse navbar-collapse justify-content-center" id="navBar1">
                    <ul className="navbar-nav mr-auto ms-sm-3">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        {loginStatus && <li className="nav-item">
                            <NavLink to='/store' className="nav-link" aria-current="page">Store</NavLink>
                        </li>}
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' className='nav-link'>Contact Us</NavLink>
                        </li>
                        {!loginStatus && <li className="nav-item">
                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                        </li>}
                        {loginStatus && <li className="nav-item">
                            <NavLink to='/profile' className="nav-link" aria-current="page">My Profile</NavLink>
                        </li>}
                    </ul>
                </div>

                {/* Cart Button */}
                <div>
                    {loginStatus && <HeaderCartButton onHide={props.onHide} onShow={props.onShow} />}
                    {loginStatus && <Button className="ms-1 me-3 ms-xl-3" onClick={logoutHandler}>Logout</Button>}
                    {!loginStatus && <Button className="me-3 ms-sm-3"><NavLink to='/signup' className='nav-link'>Create Account</NavLink></Button>}
                </div>
                {/* </div> */}
            </nav>
        </Fragment>
    );
};

export default Header;