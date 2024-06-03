import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import EmptyCart from '../Images/QAImages/pngwing.com.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {

  const [cartList, setCartList] = useState([]);
  const data = JSON.parse(Cookies.get("user"));
  const userId = data.id;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const tax = Number((total * 0.05).toFixed(2));
  const theTotal = total + tax + 65

  useEffect(() => {

    const response = axios.get(`http://localhost:1818/Cart/${userId}`)
      // axios.get("http://localhost:8000/carts")

      .then((response) => {
        setCartList(response.data)
        console.log(cartList)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleDecrement = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.chickenId === id) {
        return {...item, quantity: item.quantity > 1? item.quantity - 1 : 1 };
      }
      return item;
    });
  
    setCartList(updatedCartList);
  };

  
  const handleIncrement = (id) => {
    const updatedCartList = cartList.map((item) => {
      if (item.chickenId === id) {
        return {...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    setCartList(updatedCartList);
  };

  useEffect(() => {
    let totalPrice = 0;
    console.log("Effect")
    cartList.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [cartList, handleDecrement, handleIncrement]);


  

  const removeItem = (id) => {
    axios.delete(`http://localhost:1818/Cart/${id}`)
    const updatedCartList = cartList.filter(chicken => chicken.chickenId!== id);
    setCartList(updatedCartList);
  }

  return (

    <div>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>


          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">

              {
                cartList.length > 0 ? (
                  cartList.map((d, index) => {
                    if (d.image) {
                      return (
                        <div class="space-y-6 mb-8">
                          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                              <a href="#" class="shrink-0 md:order-1">
                                <img class="h-20 w-20 object-cover dark:hidden" src={d.image} alt="imac image" />
                                <img class="hidden h-20 w-20 dark:block" src={d.image} alt="imac image" />
                              </a>

                              <label for="counter-input" class="sr-only">Choose quantity:</label>
                              <div class="flex items-center justify-between md:order-3 md:justify-end">
                                <div class="flex items-center">
                                  <button type="button" onClick={() => handleDecrement(d.chickenId)} id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                    </svg>
                                  </button>
                                  <input type="text"  id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={d.quantity} required />
                                  <button type="button" onClick={() => handleIncrement(d.chickenId)} id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                  </button>
                                </div>
                                <div class="text-end md:order-4 md:w-32">
                                  <p class="text-base font-bold text-gray-900 dark:text-white">₹{d.price * d.quantity} </p>
                                </div>
                              </div>

                              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{d.chickenName}</a>

                                <div class="flex items-center gap-4">
                                  <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                    </svg>
                                    Add to Favorites
                                  </button>

                                  <button type="button" onClick={() => removeItem(d.chickenId)} class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  }
                  )
                )
                  :

                  (
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '400px', alignItems: 'center', height: '100%' }}>
                      <img src={EmptyCart} alt="Empty cart" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                      <p style={{ fontFamily: 'Verdana', fontSize: '16px', textAlign: 'center', paddingLeft: '15px', fontWeight: 'Bolder' }}>Your cart is empty</p>
                    </div>
                  )







              }

            </div>
            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">₹{total}</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                      <dd class="text-base font-medium text-green-600">-₹25</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">₹65</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">GST</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">₹{tax}</dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">₹{theTotal}</dd>
                  </dl>
                </div>

                <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                  <Link to='/Component' title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage
