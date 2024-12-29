import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Login() {
  return (
    <>
        <Navbar/>
        <form action="">
            <img src="../../Images/event.jpg" alt=""/>

            <div>
                <h2>Log In</h2>
            </div>

            <div>
                <label for="username">Username</label>
                <input type="text" name="username"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="text" name="password"/>
            </div>


            <div>
                <span>Don't have account?</span>
                <a href="">Register</a>
            </div>

            <button type="submit">Log In</button>

        </form>
        <Footer/>
    </>
  )
}

export default Login