import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Jumbotron from './Components/Layout/Jumbotron';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Store from './Components/Pages/Store';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <CartProvider>
      <Header onShow={showCartHandler}/>
      <Jumbotron heading="The Generics" />
      {cartVisibility && <Cart onHide={hideCartHandler} />}
      <Route path='/'><Store /></Route>
      <Route path='/home'><Home /></Route>
      <Route path='/store'><Store /></Route>
      <Route path='/about'><About /></Route>
      <Footer />
    </CartProvider>
  );
}

export default App;