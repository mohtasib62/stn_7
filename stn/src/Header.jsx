import React from 'react'
import './Header.css'
import img1 from './image/stn-logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to="/">
      <img src={img1} className='logo' />
       </Link>

      <div className="header-nav">
        <Link to="/about" className='about'>
      <div className="header-option border">
        <span className="header-optionLineOne">
              About us
            </span>
          </div>
          </Link>

       <Link to="/client" className='about'>
      <div className="header-option border">
        <span className="header-optionLineOne">
              Client Services
            </span>
          </div>
      </Link>

          <Link to="/recruitment" className='about'>
          <div className="header-option border">
            <span className="header-optionLineOne ">Recruiment</span>
        </div>
          </Link>

       <Link to="/policies" className='about'>
               <div className="header-option border">
        <span className="header-optionLineOne">
              Policies
            </span>
          </div>
          </Link>

         <Link to="/contact" className='about'>
          <div className="header-option border">
        <span className="header-optionLineOne">
              Contact us
            </span>
          </div>
         </Link>
          
          <Link to="/jobs" className='about'>
          <div className="header-option border">
          <span className="header-optionLineOne">
              Jobs
          </span>
          </div>
      </Link>

      </div>
      </div>
  )
}

export default Header