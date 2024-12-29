import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
      <Navbar/>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Have questions? Need assistance? Reach out to us!
      </p>

    

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ maxWidth: "400px" }}>
          <h2>Our Office</h2>
          <p>College Event Management System</p>
          <p>123 Campus Road</p>
          <p>City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: support@collegeevents.com</p>
        </div>

        <div style={{ maxWidth: "400px" }}>
          <h2>Contact Form</h2>
          <form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  resize: "none",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <Footer/>
    </>
    
  )
}

export default Contact