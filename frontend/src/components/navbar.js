import React from 'react'
import './navbar.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div className='title-box'>
        <li><Link to="/" className='title'>HateMiner</Link></li>
      </div>

      <div className='buttons'>
        <ul     className='buttons-inner'>
          <li><Link to="/navigate" className='each-button'>About Us</Link></li>
          <li><Link to="/bot" className='each-button'>Hate Navigate</Link></li>
          <a href="https://discord.com/">
            <li className='each-button'>Discord</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
