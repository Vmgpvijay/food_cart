import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart' element={<Cart />} />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
       <Footer />
    </>  
    
  )
}

export default App