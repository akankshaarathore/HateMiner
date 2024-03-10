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
        <li><Link to="/" className='title'>HATEMINER</Link></li>
      </div>

      <div className='buttons'>
        <ul     className='buttons-inner'>
          <li><Link to="/demo" className='each-button'>Navigate Hate</Link></li>
          <li><Link to="/profiles" className='each-button'>About US</Link></li>
          <a href="https://discord.com/oauth2/authorize?client_id=1216077364723978340&permissions=8&scope=bot">
            <li className='each-button'>Download</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
