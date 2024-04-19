import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/doctors/Doctors'
import DoctorsDetails from '../pages/doctors/DoctorsDetails'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
  )
}

export default MainRoute
