import React from 'react'
import Header from './Header'
import Contact from '../../Contact'
import Home from '../../Home'
import About from '../../About'

import { BrowserRouter, Route } from 'react-router-dom'

const Main = () => (
  <div className="body">
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/contact/" component={Contact}/>
      <Route path="/about/" component={About}/>
    </BrowserRouter>

  </div>
)

export default Main
