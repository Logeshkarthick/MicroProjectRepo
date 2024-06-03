import React from 'react'
import Offer from '../Images/Banner.png'
function Header() {
  return (
    <div>
      <header>
            <div class="container px-4 px-lg-5 my-5"  style={{display:'flex', justifyContent: 'center' }}>
               <img src={Offer} alt='offer' style={{ boxShadow: '12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07)', borderRadius: '15px'}} />
            </div>
        </header>
    </div>
  )
}

export default Header
