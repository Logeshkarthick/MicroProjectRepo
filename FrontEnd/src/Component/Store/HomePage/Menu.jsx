import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Menu() {

  const [imageData, setImageData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    menu();
  })
  const menu = async () => {
    const response = await axios.get("http://localhost:1818/images");

    setImageData(response.data);
  }

  const componentloader = () => {
    navigate('/Chicken')
  }
  return (

    <div className="container" style={{marginTop: '40px'}}  >
      <div class="header">

        <h1 style={{ fontFamily: 'Verdana', fontSize: '20px', fontWeight: 'bold', paddingLeft: '15px' }}>Shop by categories</h1>
        <h1 style={{ fontFamily: 'Verdana', fontSize: '14px', paddingLeft: '15px' }}>Freshest meats and much more!</h1>
      </div>
      <div class = 'card-align' onClick={componentloader} style={{marginTop: '45px', display:'grid',gridGap: '20px, 64px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
        {
          imageData.map((d, index) => {
            if (d.content) {
              const base64 = atob(d.content)
             
              return (

                <div class="card border-0" style={{ width: '120px', height: '154px', backgroundColor: '#fff'}}>
                  <div><img key={index} src={`data:image/${d.imagetype};base64,${base64}`} alt="Image" style={{ width: '100px', height: '100px', borderRadius: '10px', cursor: 'pointer' }} /></div>
                  <div class="px-6 py-4" style={{ fontFamily: 'Verdana', fontSize: '16px', textAlign: 'center', paddingLeft: '15px' }}>
                     {d.imageName.split(".")[0]}
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

export default Menu
