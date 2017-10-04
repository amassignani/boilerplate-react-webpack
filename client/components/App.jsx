import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home.jsx'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <h1>Booking Management has begun!</h1>
        <div className='container'>
          <route path='/' componente={Home} />
        </div>
      </div>
    </Router>
  )
}

export default App
