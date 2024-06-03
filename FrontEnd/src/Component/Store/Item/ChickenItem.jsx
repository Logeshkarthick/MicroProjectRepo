import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function ChickenItem() {
  const [chicken, setChicken] = useState([]);
  const quantity = 1;

  useEffect(() => {
    cartLists();
    listloader();
   
  }, [])

  const data = JSON.parse(Cookies.get("user"));
  const userId = data.id;

  const [update, setUpdate] = useState(0);

  const [showToast, setShowToast] = useState(false);

  const listloader = async () => {
    //SpringBoot Connection
    // const response = await axios("http://localhost:1818/chicken")
    // console.log(response.data)
    //JSON Connection
    const response = await axios("http://localhost:8000/products")
    setChicken(response.data);
  }

  const [cartList, setCartList] = useState([]);


  const [num, setNum] = useState(0);
  const Number = () => {
    setNum(num + 1);
  }

  const [cart, setCart] = useState({
    chickenId: "",
    chickenName: "",
    image: "",
    pieces: "",
    price: "",
    serves: "",
    weight: "",
    userId: "",
    quantity: 1
  })

  const cartLists = async () => {

    const request = await axios.get(`http://localhost:1818/Cart/${userId}`)
    .then((request) => {
      setCartList(request.data)
      
    })
    .catch((error) => {
      console.log(error);
    })

  }
  
  useEffect(() => {

    axios.post("http://localhost:1818/Cart", cart)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cart]);

  const isItemInCart = (chickenName) => {
    console.log(cartList.some((item) => item.chickenName === chickenName))
  };

  const onAddToCart = (chicken) => {

    const data = JSON.parse(Cookies.get("user"));

    setCart({
      ...cart, chickenId: chicken.chickenId, chickenName: chicken.chickenName,
      image: chicken.image, pieces: chicken.pieces, price: chicken.price, serves: chicken.serves,
      weight: chicken.weight, userId: data.id
    });

    
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };

  return (
    <div class='container' >
      <div class='card-align' style={{ marginTop: '25px', display: 'grid', justifyContent: 'center', gridGap: '20px, 20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>

        {showToast && (
          <div className="fixed top-10 right-20 mb-4 mr-4 z-50">
            <div className="bg-green-500 text-white py-1 px-4 rounded">
              <p>Product Added to Cart !</p>
            </div>
          </div>
        )}
        {
          chicken.map((d, index) => {
            if (d.image) {

              return (

                <div class="card border-0" style={{ width: '335px', height: '410px', backgroundColor: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ paddingTop: '10px' }}>
                      <img key={index} src={d.image} alt="Image" style={{ width: '320px', height: '220px', borderRadius: '15px' }} />
                    </div>
                  </div>
                  <div style={{}}>
                    <div class="px-6 py-4" style={{ width: '330px', height: '70px', display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
                      <p style={{ fontFamily: 'Sans-Serif', fontSize: '16px', color: '#0d0d0e', fontWeight: '500' }}>{d.chickenName}</p>
                    </div>
                    <div style={{ width: '330px', height: '20px', display: 'flex', justifyContent: 'left' }}>
                      <p style={{ fontFamily: 'Sans-Serif', fontSize: '12px', color: '#4d4d4f', fontWeight: '500', paddingLeft: '25px' }}>{d.description}</p>
                    </div>
                    <div style={{ width: '330px', height: '40px', display: 'flex', justifyContent: 'left' }}>
                      <p style={{ fontFamily: 'Sans-Serif', fontSize: '12px', color: '#4d4d4f', fontWeight: '500', paddingLeft: '25px' }}>{d.weight} | {d.pieces} | {d.serves} </p>
                    </div>
                    <div style={{ width: '330px', height: '40px', display: 'flex', justifyContent: 'left' }}>
                      <p style={{ fontFamily: 'Sans-Serif', fontSize: '16px', color: '#4d4d4f', fontWeight: 'Bold', paddingLeft: '25px' }}>₹{d.price}</p>
            
                      <button onClick={() => onAddToCart(d)}  disabled={isItemInCart(d.chickenName)}  style={{ marginLeft: '20px', backgroundColor: 'green', fontSize: '14px', color: 'white', width: '90px', height: '30px', borderRadius: '10px' }}>
                      {isItemInCart(d.chickenName)? 'Added to Cart' : 'Add to Cart'}
                      </button>

                    </div>
                  </div>


                </div>
              )
            }
          }
          )
        }

      </div>
    </div>
  )
}

export default ChickenItem
