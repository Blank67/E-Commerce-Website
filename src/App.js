import React, { Suspense, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
// import Footer from './Components/Layout/Footer';
// import Header from './Components/Layout/Header';
// import About from './Pages/About';
// import ContactUs from './Pages/ContactUs';
// import Home from './Pages/Home';
// import ProductDetails from './Pages/ProductDetails';
// import Store from './Pages/Store';
// import CartProvider from './store/CartProvider';
// import Login from './Pages/Login';

// const Cart = React.lazy(() => import('./Components/Cart/Cart'));
const Footer = React.lazy(() => import('./Components/Layout/Footer'));
const Header = React.lazy(() => import('./Components/Layout/Header'));
const About = React.lazy(() => import('./Pages/About'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const Home = React.lazy(() => import('./Pages/Home'));
const ProductDetails = React.lazy(() => import('./Pages/ProductDetails'));
const Store = React.lazy(() => import('./Pages/Store'));
const CartProvider = React.lazy(() => import('./store/CartProvider'));
const Login = React.lazy(() => import('./Pages/Login'));

const API_URL = 'https://react-ecommnerce-data-default-rtdb.firebaseio.com/users.json';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

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
    <CartProvider>
      <Header onShow={showCartHandler} />
      {cartVisibility && <Cart onHide={hideCartHandler} />}
      <Suspense fallback={<h1 className='text-center'>LOADING.....</h1>}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/store' />
          </Route>
          <Route path='/home'><Home /></Route>
          <Route exact path='/store'><Store /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/contact-us'><ContactUs onPost={onPostDataHandler} /></Route>
          <Route path='/store/:productId'><ProductDetails /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
      </Suspense>
      <Footer />
    </CartProvider>
  );
}

export default App;