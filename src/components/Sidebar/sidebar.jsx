import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo1.png"

const sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt='' />
      </a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
              <i className='icon-user-following'></i>
              </a>
            </li>


            <li className='nav__item'>
              <a href='#project' className='nav__link'>
              <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
              <i className='icon-phone'></i>
              </a>
            </li>
                
            

          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default sidebar