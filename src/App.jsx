import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/cart' element={<Cart />} />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
       <Footer />
    </>  
    
  )
}

export default App