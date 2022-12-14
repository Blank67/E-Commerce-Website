import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import About from './Components/Pages/About';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import Store from './Components/Pages/Store';
import CartProvider from './store/CartProvider';

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
      <Header onShow={showCartHandler}/>
      {cartVisibility && <Cart onHide={hideCartHandler} />}
      <Route exact path='/'><Store /></Route>
      <Route path='/home'><Home /></Route>
      <Route path='/store'><Store /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/contact-us'><ContactUs onPost={onPostDataHandler} /></Route>
      <Footer />
    </CartProvider>
  );
}

export default App;