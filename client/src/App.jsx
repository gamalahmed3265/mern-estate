import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn';
import {Notfound} from './pages/Notfound';
import CreateListing from './pages/CreateListing';
import { PrivateRoute } from './Compontens/PrivateRoute';
import { Header } from './Compontens/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/create-listing" element={<CreateListing/>}/>
        </Route>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
