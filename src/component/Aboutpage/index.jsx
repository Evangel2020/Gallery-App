import React from 'react'
import AboutImage from '../../assets/images/image-interactive.jpg'
import AboutImage1 from '../../assets/images/image-deep-earth.jpg'
import AboutImage2 from '../../assets/images/image-night-arcade.jpg'
import AboutImage3 from '../../assets/images/image-soccer-team.jpg'
import AboutImage4 from '../../assets/images/image-grid.jpg'
import AboutImage5 from '../../assets/images/image-from-above.jpg'
import AboutImage6 from '../../assets/images/image-pocket-borealis.jpg'
import AboutImage7 from '../../assets/images/image-curiosity.jpg'
import AboutImage8 from '../../assets/images/image-fisheye.jpg'
import "./about.css"

const Aboutpage = () => {
  return (
    <div className='about_container'>
        <div className='image-section'>
            <div className='first-image'>
            <img src={AboutImage} />
            </div>
            <div className='second-image'>
                <h3>The leader in<br/> interactive VR</h3>
                <p> Founded in 2011, loopstudios has been producing world-class virtual reality project for some
                    of the best countries around the globe. Our award winning creation have transformed businesses 
                    through total digital experience that bind to their brand.
                </p>
            </div>
        </div>
        <div className='content-section'>
            <div className='content-heading'>
                <div className='left-logo'>
                    <h2>Our creation</h2>
                    </div>
                    <div className='btn-right'>
                        <button className='button'>See All</button>
                    </div>
            </div>
            <div className='gallery-grid'>
                <div className='first-grid'>
                    <div className='grid-image'>
                        <img src={AboutImage1} />
                        <div className='grid-content'>
                            <h2>Deep Earth</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage2} />
                        <div className='grid-content'>
                            <h2>Night Arcade</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage3} />
                        <div className='grid-content'>
                            <h2>Soccer team Vr</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage4} />
                        <div className='grid-content'>
                            <h2>The grid</h2>
                        </div>
                    </div>
                </div>
                <div className='second-grid'>
                    <div className='grid-image'>
                        <img src={AboutImage5} />
                        <div className='grid-content'>
                            <h2>From up above Vr</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage6} />
                        <div className='grid-content'>
                            <h2>Pocket borealis</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage7} />
                        <div className='grid-content'>
                            <h2>The curiosity</h2>
                        </div>
                    </div>
                    <div className='grid-image'>
                        <img src={AboutImage8} />
                        <div className='grid-content'>
                            <h2>Make it fisheye</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='botton-grid'>
                <button>See all</button>
            </div>

        </div>
    </div>
  )
}

export default Aboutpage