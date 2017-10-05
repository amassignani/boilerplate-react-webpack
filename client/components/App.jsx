import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home.jsx'
import Nav from './Nav.jsx'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <h1>Booking Management has begun!</h1>
        <div className='container'>
          <Route path='/Home' component={Home} />
        </div>
      </div>
    </Router>
  )
}

export default App
