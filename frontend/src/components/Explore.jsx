import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import beach1 from '../assets/beach1.jpg'
import mount4 from '../assets/mount4.jpg'



const Explore = () => {
  return (
    <div className='explore'>
      <div className="exploreDiv">
        <div className="exploreDivLeft">
          <h2 className="exploreTitle">Explore Our Houses</h2>
          <span className="exploreDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facere ut mollitia molestiae, odio sed provident commodi laboriosam nam, libero earum, odit repellendus. Fugiat nam minima corporis, aliquid dolor et.</span>
          <div className="exploreQuote">
            <FaQuoteLeft />
            <p className="exploreQuoteText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi harum doloribus...</p>
          </div>
          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque excepturi sapiente qui aliquid, quia dolore numquam unde laudantium dolorem esse sunt consectetur autem, velit odio, ducimus perspiciatis accusantium quaerat?</p>

          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque excepturi sapiente qui aliquid... <Link to='/contact'>Contact Us</Link></p>
          <Link to='/' className='exploreLink'>Discover More</Link>
        </div>
        <div className="exploreDivRight">
          <div className="exploreDivCards">
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                <h4>Best Houses</h4>
                <span>Latest Collection</span>
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src={beach1} alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src={mount4} alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                <h4>Different Types</h4>
                <span>Over 304 Houses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore