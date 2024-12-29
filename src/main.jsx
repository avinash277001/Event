import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUS from './Pages/AboutUS.jsx'
import Gallary from './Pages/gallary.jsx'
import Contact from './Pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/AboutUS' element={<AboutUS />}/>
      <Route path='/Gallary' element={<Gallary />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>    
  </BrowserRouter>

  </>

)
rfce