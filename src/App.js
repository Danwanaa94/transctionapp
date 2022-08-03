import React from 'react'

import Login from './screens/Login'
import Signup from './screens/Signup'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'

function App() {
  return (
    <div>
    
      <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          </Routes>
    </div>
  )
}

export default App