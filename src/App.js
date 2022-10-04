import React from 'react' 
import "./app.css"
import Sidebar from "./components/Sidebar/sidebar"
import Home  from "./components/Home/home"
import About from "./components/About/about"
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact"

const App = () => {
  return (
   < >
    <Sidebar />
    <main className='main'>
    < Home />
    < About />
    < Portfolio />
    < Contact />
    </main>


    </ > 
  )
}

export default App
