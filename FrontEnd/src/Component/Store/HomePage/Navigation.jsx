import React from 'react'
import Logo from '../Images/LOGO.png';
import { FaRegUser } from "react-icons/fa";
import { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Navigation({ cartItems }) {

    const data = JSON.parse(Cookies.get("user"));
    const userId = data.id;
    
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const userSet = () => {
        const data = JSON.parse(Cookies.get("user"));
        setUserName(data.fname);
    }

    const [cartCount, setCartCount] = useState(0)

    const count = () => {
        const response = axios.get(`http://localhost:1818/Cart/${userId}`)
        // axios.get("http://localhost:8000/carts")
  
        .then((response) => {
          setCartCount(response.data.length())
        })
        .catch((error) => {
          console.log(error);
        })
    }

    const [show, setShow] = useState(false);

    const handleNavigate = () => {
        navigate('/Cart')
    }
    

    useEffect(() => {
        userSet();
        count();

    }, [])

    return (

        <div sticky="top" style={{ display: 'flex', paddingLeft: '200px', paddingRight: '200px', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', maxHeight: '80px', margin: '0 auto', boxShadow: '12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07)' }}>
            <div>
                <img src={Logo} alt="logo" style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }} />
            </div>

            <div>
                <form method="post">
                    <div style={{ flex: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px', borderRadius: '5px' }}>
                        <input type="text" autocomplete="off" name="text" style={{ border: 'none', width: '300px', height: '35px', outline: 'none', borderRadius: '15px', padding: '1em', backgroundColor: '#ffff', boxShadow: 'inset 2px 5px 10px rgba(0,0,0,0.3)', transition: '300ms ease-in-out' }} placeholder="Search for Product" />
                    </div>

                </form>
            </div>



            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <FaRegUser />
                </div>

                <div>
                    <p style={{ fontFamily: 'Verdana', fontWeight: 'bold', paddingTop: '15px', paddingLeft: '7px' }}>{userName}</p>
                </div>

            </div>
            <div >
            {/* onClick={handleShow} is Removed for Cart */}
                <Button data-bs-toggle="offcanvas" style={{ width: '3rem', height: '3rem', position: 'relative' }} variant="outline-primary" onClick={handleNavigate} className = "rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center" style={{
                        color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute',
                        bottom: 0, right: 0, transform: 'translate(25%, 25%)'
                    }}>

                        {cartCount}

                    </div>
                </Button>

               

            </div>
            {/* <CartComponent show={show} handleClose={handleClose} /> */}



        </div>


    )
}

export default Navigation