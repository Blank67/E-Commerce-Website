import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Jumbotron from './Components/Layout/Jumbotron';
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
      <Store />
      <Footer />
    </CartProvider>
  );
}

export default App;