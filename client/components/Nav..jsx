import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Nav'>
      <h1>Navegation</h1>
      <ul>
        <li>Home</li>
        <li>Booking</li>
        <li>About</li>
        <li>Price</li>
        <li>Location</li>
      </ul>
    </div>
  )
}

export default Nav