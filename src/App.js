import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import SignUp from './Pages/SignUp';

const Footer = React.lazy(() => import('./Components/Layout/Footer'));
const Header = React.lazy(() => import('./Components/Layout/Header'));
const About = React.lazy(() => import('./Pages/About'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const Home = React.lazy(() => import('./Pages/Home'));
const ProductDetails = React.lazy(() => import('./Pages/ProductDetails'));
const Store = React.lazy(() => import('./Pages/Store'));
const Login = React.lazy(() => import('./Pages/Login'));
const Profile = React.lazy(() => import('./Pages/Profile'));

const API_URL = 'https://react-ecommnerce-data-default-rtdb.firebaseio.com/users.json';

const App = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const loginStatus = useSelector(state => state.auth.isLoggedIn);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };
  const onPostDataHandler = async (user) => {
    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <>
      <Header onShow={showCartHandler} />
      {cartVisibility && <Cart onHide={hideCartHandler} />}
      <Suspense fallback={<h1 className='text-center'>LOADING.....</h1>}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route path='/home'><Home /></Route>
          {loginStatus && <Route exact path='/store'><Store /></Route>}
          <Route path='/about'><About /></Route>
          <Route path='/contact-us'><ContactUs onPost={onPostDataHandler} /></Route>
          {loginStatus && <Route path='/store/:productId'><ProductDetails /></Route>}
          {!loginStatus && <Route path='/login'><Login /></Route>}
          {!loginStatus && <Route path='/signup' ><SignUp /></Route>}
          {loginStatus && <Route path='/profile' ><Profile /></Route>}
          <Route path='*'><Redirect to='/home' /></Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;