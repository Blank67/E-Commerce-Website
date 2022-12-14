import React, { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../firebase/auth-context";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = () => {
        authCtx.logout();
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
                        {authCtx.isLoggedIn && <li className="nav-item">
                            <NavLink to='/store' className="nav-link" aria-current="page">Store</NavLink>
                        </li>}
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' className='nav-link'>Contact Us</NavLink>
                        </li>
                        {!authCtx.isLoggedIn && <li className="nav-item">
                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                        </li>}
                    </ul>
                </div>

                {/* Cart Button */}
                <div>
                    {authCtx.isLoggedIn && <HeaderCartButton onHide={props.onHide} onShow={props.onShow} />}
                    {authCtx.isLoggedIn && <Button className="ms-1 me-3 ms-xl-3" onClick={logoutHandler}>Logout</Button>}
                    {!authCtx.isLoggedIn && <Button className="me-3 ms-sm-3"><NavLink to='/signup' className='nav-link'>Create Account</NavLink></Button>}
                </div>
                {/* </div> */}
            </nav>
        </Fragment>
    );
};

export default Header;