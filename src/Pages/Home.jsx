import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Home() {

  return (
    <>
      <Navbar/>

      <div className="R">
          Build By Ritesh
          <button className="RB">Know About Me</button>
      </div>


      <div className="slideshow"></div>

      <p className="exp">Explore...</p>

      <div className="cards">

          <div className="card">
              <span>Freshers Event</span>
              <p>The freshers party has several events such as one-minute games, self-introduction of the freshers, dance and most importantly selection of the Mr and Ms Freshers.</p>
          </div>
          <div className="card">
              <span>Farewell Party</span>
              <p>A farewell party is a heartfelt gathering designed to honor who is departing from a college. It is a blend of celebration, nostalgia, and good wishes, marked by cheerful and emotional moments.</p>
          </div>
          <div className="card">
              <span>Seminar</span>
              <p>The seminar focused on leveraging digital platforms for effective event planning and management.</p>
          </div>
          <div className="card">
              <span>Sports Events</span>
              <p>The seminar highlighted essential features of sports event management including user-friendly interfaces, live score and robust social media connectivity for fan interaction and event promotion.</p>
          </div>
          <div className="card">
              <span>Management Conferences</span>
              <p>Here we offer professional gathering where industry leaders, experts, and participants discuss strategies, innovations, and trends in organizational management.</p>
          </div>
          <div className="card">
              <span>Special Functions</span>
              <p>A special function is a formal or celebratory event organized for a specific purpose, featuring planned activities such as speeches, performances, and dining, often tailored to honor achievements, milestones, or cultural significance.</p>
          </div>

      </div>

      <Footer/>
    </>
  )
}

export default Home