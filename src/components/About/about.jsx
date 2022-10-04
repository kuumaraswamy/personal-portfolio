import React from 'react'
import "./about.css";
import Image from "../../assets/avatar1.png";
import Resume from "../../assets/resume.pdf";
const about = () => {
  return (
    <section className='about container section' id='about'> 
    <h2 className='section__title'> About Me</h2>
    <div className='about__container grid'> 
    <img src={Image} alt="" className='about__img'></img>

    <div className='about__data grid'>
    <div className='about__info'>
    <p className='about__description'> I became really passionate and kept creating since then. I’m grateful that I can make a living through it and made my passion my work.</p>
    <a href={Resume} className='btn' download="RESUME"> Download CV</a>
    </div>

  

    <div className='about__skills grid'>
    <div className='skills__data'>
    <div className='skills__titles'>
    <h3 className='skills__name'> SKILL SET </h3>
      <div className='skills__number'> 
            <a  className='about__html' target="_none" rel='noopener noreferrer'>
               <i class="fa-brands fa-html5"/>     &nbsp;
            </a> 

            <a  className='about__css' target="_none" rel='noopener noreferrer' >
              <i class="fa-brands fa-css3 "></i>    &nbsp;
             </a>

             <a  className='about__js' target="_none" rel='noopener noreferrer'>     
             <i class="fa-brands fa-js "></i>      &nbsp;
             </a>
       
              <a  className='about__bootstrap' target="_none" rel='noopener noreferrer'>
              <i class="fa-brands fa-bootstrap "></i>  &nbsp;
              </a>
      
              <a  className='about__react' target="_none" rel='noopener noreferrer' >
              <i class="fa-brands fa-react "></i>  &nbsp;
              </a>
      
              <a  className='about__node' target="_none" rel='noopener noreferrer'>     
              <i class="fa-brands fa-node "></i>  &nbsp;
              </a>
      
              <a  className='about__git' target="_none" rel='noopener noreferrer' >
              <i class="fa-brands fa-github "></i>  &nbsp;
              </a>
              
       </div>
         
    </div>
      
    </div>

    

    

    </div>

   
    </div>
    </div>

   <div class="blockquote-wrapper">
  <div class="blockquote">
    <h2 > I know I'm not succesfull enough, but I'm passionate enough not to worry about success.</h2>
    <h4>- Kumara Swamy </h4>
  </div>
  </div> 
    
 </section>
  
  )
}

export default about




