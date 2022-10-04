import React from 'react'
import "./home.css";
import Me from "../../assets/avatar1.png";
import Headersocials from "./Headersocials";
import Scrollbar from './Scrollbar';
import Shapes from "./Shapes";

const home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
      <img src={Me} alt='' className='home__img'/> 
      <h1 className='home__name'>Kumara Swamy</h1>
      <span className='home__education'> I'm Front-End Developer</span>

     <Headersocials />
   
      <a href='#contact' className='btn'> Hire Me</a>

     <Scrollbar />
    
      </div> 
      <Shapes />
    </section>
  )
}

export default home