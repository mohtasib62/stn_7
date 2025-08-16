import React from 'react'
import './Home.css'
import img from './image/banner.jpg'
import { Link } from 'react-router-dom'
import img6 from './image/Screenshot 2025-01-26 153955.png'



function Home() {
  return (
    <div className='home'>

      
      
       <img src={img} className="banner" />

       <h1 className="banner-text">Your security our expertise, safeguarding people, property and assets.</h1>

                   <div className="homeSelectionPic">

               <div className="picOne">
               <img src={img1} alt="Pic" className="door" />
               <span className='doorText'>Door supervisor</span>
               </div>

                <div className="picTwo">
                <img src={img2} alt="Pic" className="event" />
                <span className='eventText'>Event security</span>
                </div>

                <div className="picThree">
                <img src={img3} alt="Pic" className="support" />
                <span className="supportText">Support security</span>
                </div>

                <div className="picFour">
                <img src={img4} alt="Pic" className="manned" />
                <span className="mannedText">Manned security</span>
                </div>

             </div> 

       <Link to="/client">
       <div className="four">
        <button>Check our Services</button>
       </div>
       </Link>

       

       <img src={img6}  className="homelogos-one" />


    
       <div className='touch'>
      <h3 className='quote'>Needing A Quote</h3>
      <p className="quote-text">Contact our security experts now to discuss your security requirements and get a quote from us</p>
      <Link to="/contact" className='sp about'>
    <button className='so'>Get In Touch</button>
    </Link>
    </div>


      
    </div>
  )
}

export default Home