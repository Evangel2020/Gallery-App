
import React, {useState, useRef} from 'react'
import './heropage.css'



const Heropage = () => {
  let [isClicked, setIsClicked] = useState(false)
  return (
    <div className='container'>
      <nav className='Navigation_bar'>
        <h3 className='logo'>loopstudios</h3>
        <ul className='nav_list'>
          <li>About</li>
          <li>Career</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        <div id= "activeBtn" onClick={() => setIsClicked(!isClicked)} className='hamburger-menu'>
            <svg id='svgBtn' className= "svg-menu" width="24" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
              </g>
            </svg>
          </div>

        <div  id= "togglerBtn" className={isClicked ? "menu-toggler clicked" : "menu-toggler notclicked"}>

          <div id='removeBtn' onClick={() => setIsClicked(!isClicked)} className='close-btn'>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#000" fill-rule="evenodd"/>
            </svg>
          </div>
        <ul className='navlist-mobile'>
          <li>About</li>
          <li>Career</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        </div>
      </nav>

      <div className='hero-content'>
        <h2>Immersive <br />experience <br/> that deliver</h2>
      </div>
      </div>
  )
}

export default Heropage