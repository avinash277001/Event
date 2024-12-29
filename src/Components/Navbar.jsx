import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <header>
        <h3>Event Management</h3>
        <nav>
            <ul>
                <li onClick={()=>{
                  Navigate("/")
                }}>Home</li>
                <li onClick={()=>{
                  Navigate("/Gallary")
                }}>Gallary</li>
                <li onClick={()=>{
                  Navigate("/Contact")
                }}>Contact</li>
                <li onClick={()=>{
                  Navigate("/AboutUS")
                }}>About</li>
            </ul>
        </nav>
        <div class="btn">
            <button onClick={()=>{
              Navigate("/Login")
            }}>Login</button>
        </div>
      </header>
    </>
  )
}

export default Navbar