import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function AboutUS() {
  return (
    <div>
        <Navbar/>
        <div className='about'>

            <h2> Our Objective</h2>

            <p>Welcome to College Evenet Management system. This platform designed to simplify and revolutionize event management for colleges. We are a team of passionate innovators dedicated to providing a seamless experience for students, faculty, and organizers to plan, organize, and enjoy campus events.</p>


            <h2> Our Mission </h2>

            <p>Our mission is to foster collaboration, engagement, and creativity in campus life by providing an all-in-one event management solution. We aim to:</p>

            <p>. Simplify event organization processes.</p>
            <p>. Encourage active participation from students and staff.</p>
            <p>. Provide tools for efficient communication and management.</p>


            <h2> What We Offer </h2>

            <p>Our platform ensures that managing college events becomes effortless with features like:</p>

            <span>. Event Creation & Registration: Plan and host events with ease while allowing attendees to register with just a click.</span>
            <p>. Real-time Updates: Keep participants informed with instant notifications about schedules, changes, and announcements.</p>
            <p>. Attendance Tracking: Monitor event participation through a user-friendly interface.</p>


            <h2>Contact US</h2>

            <p>Do you have suggestions, questions, or want to collaborate? Feel free to get in touch with us!</p>
            <p>--------------------------------------</p>
            <p>📧 Email: support@[youremail].com</p>
            <p>📞 Phone: +123-456-7890</p>

        </div>
        <Footer />
    </div>
  )
}

export default AboutUS