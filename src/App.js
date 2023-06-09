import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './container/Login'
import Logout from './container/Logout'
import Registration from './container/Registration'
import Products from './container/Products'
import Signup from './container/Signup'
import Navigation from './container/Navigation'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}