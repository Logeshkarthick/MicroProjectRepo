import React from 'react'
import { useState } from 'react';
import Navigation from '../HomePage/Navigation'
import ChickenItem from '../Item/ChickenItem';
import Footer from '../HomePage/Footer';

function Chicken() {
  const [cartItems, setCartItems] = useState(0);

 

  const handleAddToCart = (chicken) => {
    
    setCartItems(cartItems + 1);
  };

  return (
    <div>
      <Navigation cartItems={cartItems}/>
      <ChickenItem AddItemToCart={handleAddToCart} />
      <Footer />

    </div>
  )
}

export default Chicken
