import React from 'react'
import {Link} from 'react-router-dom'
import estate from '../assets/estate3.jpg'
import realestatecountryside from '../assets/realestatecountryside.jpg'
import realestatemountain from '../assets/realestatemountain.jpg'
import realestatebeach from '../assets/realestatebeach.jpg'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="introLeft">
        <div className="introLeftDiv">
          <div className="introLeftContent">
            <h2 className="introTitle">We are Guest House Shop</h2>
            <Link to='/products' className='introLink'>Purchase Now!</Link>
          </div>
          <img src={estate} alt="" />
        </div>
      </div>
      <div className="introRight">
        <div className="introRightDiv">
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Village</h3>
                <p className="introRightDesc">Best House in village</p>
              </div>
              <img src={realestatecountryside} alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Village</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Mountain</h3>
                <p className="introRightDesc">Best House in Mountain</p>
              </div>
              <img src={realestatemountain} alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Mountain</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Beach</h3>
                <p className="introRightDesc">Best House in Beach</p>
              </div>
              <img src={realestatebeach} alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Beach</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accessories</h3>
                <p className="introRightDesc">Best Trend for Accessories</p>
              </div>
              <img src="./assets/uploads/baner-right-image-04.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accessories</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro