import React from 'react'
import "./portfolio.css"
import Work1 from "../../assets/work-1.svg"
import Work2 from "../../assets/work-2.svg"
import Work3 from "../../assets/work-3.svg"
import Work4 from "../../assets/work-4.svg"
import Work5 from "../../assets/work-5.svg"
import Work6 from "../../assets/work-6.svg"


const portfolio = () => {
  return (
    <section className='project container section' id='project'>
    <h2 className='section__title'> Projects</h2>

   
<div className='container project__container'>
  <article className='project__item'>
      <div className='project__item-image'>
          <img src={Work1} alt=""></img>
      </div>
       <h3> this is portfolio item title</h3>
       <a href='https://github.com/kuumaraswamy/kumar-portfolio.github.io' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
       <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>
  </article>
     
</div>

  {/* <div className='container project__container' >
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Work2} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Work3} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Work4} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Work5} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Work6} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div> */}

 </section>
  )
}

export default portfolio