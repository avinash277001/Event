import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Gallary() {
  return (
    <div>
        <Navbar/>
        <div className='gallary'>

        <img src="../../Images/4.jpeg" alt="" />
        <img src="../../Images/5.JPG" alt="" />
        <img src="../../Images/6.jpeg" alt="" />
        <img src="../../Images/7.jpeg" alt="" />
        <img src="../../Images/8.jpg" alt="" />
        <img src="../../Images/9.jpg" alt="" />
        <img src="../../Images/10.jpg" alt="" />
        <img src="../../Images/11.jpg" alt="" />
        <img src="../../Images/12.jpg" alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Gallary