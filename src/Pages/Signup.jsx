import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Signup() {
  return (
    <>
        <Navbar/>
        <form action="">
            <img src="../../Images/event.jpg" alt=""/>

            {/* <section>
                <h2>Sign UP</h2>
            </section> */}



            <div className="inp">
                <div className="first">
                    <div>
                        <label for="Name">Name</label>
                        <input type="text" name="username"/>
                    </div>
                
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" id=""/>
                    </div>
                
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                </div>
        

                <div className="second">
                    <div>
                        <label for="mobile">Mobile No.</label>
                        <input type="number" name="mobile"/>
                    </div>
                
                    <div>
                        <label for="dob">Date of Birth</label>
                        <input type="date" name="dob" id=""/>
                    </div>
                
                    <div>
                        <label for="Course">Course</label>
                        <input type="text" name="Course" id=""/>
                    </div>
                
                </div>
            </div>


            <button type="submit">Sign UP</button>

        </form>
        <Footer/>
    </>
  )
}

export default Signup