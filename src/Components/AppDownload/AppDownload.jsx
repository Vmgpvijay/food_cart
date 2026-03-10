import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='app-continer mt-5 text-center fw-bold'>
            <p>For Better Experiance download <br />FoodCart App</p>
            <div className='d-flex justify-content-center gap-3 mt-4 img-div'>
                <img className='images' src={assets.play_store} alt="" />
                <img className='images' src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload