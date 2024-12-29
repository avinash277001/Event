import React from 'react'
import '../Css/Home.css'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="social">
                <span>-----------------------------------------------------------------------------</span>
                <img src="../../Images/facebook-f-brands-solid.svg" alt=""/>
                <img src="../../Images/youtube-brands-solid.svg" alt=""/>
                <img src="../../Images/instagram-brands-solid.svg" alt=""/>
                <img src="../../Images/twitter-brands-solid.svg" alt=""/>
                <img src="../../Images/linkedin-brands-solid.svg" alt=""/>
                <img src="../../Images/discord-brands-solid.svg" alt=""/>
                <span>-----------------------------------------------------------------------------</span>        
            </div>
            <div className="sp">
                <span className="s1">Event Management</span>
                <span className="s2">Copyright &copy 2024 Management, Inc.</span>
            </div>
            <ul>
                <li>Privacy And Policy</li>
                <span>|</span>
                <li>Legal Stuff</li>
                <span>|</span>
                <li>Security</li>
                <span>|</span>
                <li>Wesite Accessibility</li>
                <span>|</span>
                <li>Mange Cookies</li>
            </ul>
        </footer>
    </>
  )
}
