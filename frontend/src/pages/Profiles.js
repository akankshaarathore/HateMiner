import React from 'react'
import './profiles.css'
import MainGif from '../res/profiles.gif'
const Profiles = () => {
  return (
    <div className='bg-profile'>
      <p className='profiles-title'>Tracking the workplace</p>
      <p className='profiles-instruct'> View chat histories and take appropriate action!</p>
      <img className='gif-file' src={MainGif}/>
    </div>
  )
}

export default Profiles
