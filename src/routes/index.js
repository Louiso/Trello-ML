import React from 'react'
import { Router } from "@reach/router"
import Home from '../container/Home'

function Root() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default Root