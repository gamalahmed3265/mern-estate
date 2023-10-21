import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import { Home } from './pages/home'
import { SignUp } from './pages/SignUp'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn';
import {Notfound} from './pages/Notfound';
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
