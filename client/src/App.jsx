import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import { Home } from './pages/home'
import { SignUp } from './pages/SignUp'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


const Notfound = () => {
  return (
    <div className='mx-auto text-center notfound-fixed bg-slate-700 p-8 rounded-lg text-white'>
      <div className="font-bold text-lg">Not found</div>
      <p>Sorry. The Url is Wrong</p>
    </div>
  )
}

export default App
