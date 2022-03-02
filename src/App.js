import React from 'react'
import Calculator from './Component/Calculator/Calculator.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'



function App() {
  return (
<Calculator/>
  )
}

export default App