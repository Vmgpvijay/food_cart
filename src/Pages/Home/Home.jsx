import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/EploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';

function Home() {
 const [category, setCategory] = useState("All");

  return (
    <div className='menu-container'>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home