import React from 'react'
import './Footer.css'
import img from './image/sia.png'
import img1 from './image/x.png'
import img2 from './image/in.png'
import img3 from './image/fac.png'
import img4 from './image/cam.png'

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-one">
      <div className="info">
        <h2>Get in touch</h2>
        <h2>Call:0208 534 9028</h2>
        <h2>Email: info@stnsecurity.co.uk</h2>
        </div>
        <div className="info-">
          <p>SIA Approved</p>
          <p>STN Security Services holds</p>
          <p>SIA approved contractor status</p>
          <p>for the provision of security</p>
          <p>guarding services.</p>
        </div>
        <div className="sia-logo">
            <img src={img}  />
        </div>
    </div>
    <p className='hr'>p</p>
    <div className="footer-two">
      <div className="info-one">
      <h2>Reg Office: City Gate House 246 - 250 Romford Road, Forest Gate, London E7 9HZ</h2>
      <h3>© STN SECURITY / Registered in England and Wales REG: 09686176  / Privacy Policy</h3>
     </div>
     <div className="info-two">
        <img src={img1} />
     </div>
     <div className='info-two'>
      <img src={img2} alt="" />
     </div>
     <div className='info-two'>
      <img src={img3} alt="" />
     </div>
     <div className='info-two'>
      <img src={img4} alt="" />
     </div>
    </div>
   </div>
  )
}

export default Footer