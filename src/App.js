import React, { Suspense, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
// import Footer from './Components/Layout/Footer';
// import Header from './Components/Layout/Header';
// import About from './Components/Pages/About';
// import ContactUs from './Components/Pages/ContactUs';
// import Home from './Components/Pages/Home';
// import ProductDetails from './Components/Pages/ProductDetails';
// import Store from './Components/Pages/Store';
// import CartProvider from './store/CartProvider';

// const Cart = React.lazy(() => import('./Components/Cart/Cart'));
const Footer = React.lazy(() => import('./Components/Layout/Footer'));
const Header = React.lazy(() => import('./Components/Layout/Header'));
const About = React.lazy(() => import('./Components/Pages/About'));
const ContactUs = React.lazy(() => import('./Components/Pages/ContactUs'));
const Home = React.lazy(() => import('./Components/Pages/Home'));
const ProductDetails = React.lazy(() => import('./Components/Pages/ProductDetails'));
const Store = React.lazy(() => import('./Components/Pages/Store'));
const CartProvider = React.lazy(() => import('./store/CartProvider'));

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
        </Switch>
      </Suspense>
      <Footer />
    </CartProvider>
  );
}

export default App;