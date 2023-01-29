import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {

    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    // const refreshToken = (tkn) => {
    //     setToken(tkn);
    //     localStorage.setItem('token', tkn);
    // }

    const loginHandler = (tkn) => {
        setToken(tkn);
        localStorage.setItem('token', tkn);
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.clear('token');
    }

    const authContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        // refresh: refreshToken
    };
    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;