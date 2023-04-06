import React from 'react'
import Slider from "react-slick";
import { FaBed, FaEye, FaShoppingCart, FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import mount1 from '../assets/mount1.jpeg'
import mount2 from '../assets/mount2.jpeg'
import mount3 from '../assets/mount3.jpg'
import mount4 from '../assets/mount4.jpg'

const WomenLatest = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="latestContainer" id="women">
      <div className="latestDiv">
        <div className="latestTetxs">
          <h3 className="latestTitle">Houses in Mountain</h3>
          <p className="latestDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings}>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={mount1} alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/product/3423' className="sliderImgLink">
                      <FaEye />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaStar />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaShoppingCart />
                    </Link>
                  </div>
                </div>
                <div className="sliderImgBottom">
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">House</h3>
                    <span className="sliderImgStar">5 <FaBed /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">TND 750.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={mount2} alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
                      <FaEye />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaStar />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaShoppingCart />
                    </Link>
                  </div>
                </div>
                <div className="sliderImgBottom">
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">House</h3>
                    <span className="sliderImgStar">5 <FaBed /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">TND 450.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={mount3} alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
                      <FaEye />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaStar />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaShoppingCart />
                    </Link>
                  </div>
                </div>
                <div className="sliderImgBottom">
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">House</h3>
                    <span className="sliderImgStar">5 <FaBed /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">TND 130.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={mount4} alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
                      <FaEye />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaStar />
                    </Link>
                    <Link to='/' className="sliderImgLink">
                      <FaShoppingCart />
                    </Link>
                  </div>
                </div>
                <div className="sliderImgBottom">
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">House</h3>
                    <span className="sliderImgStar">5 <FaBed /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">TND 800.000</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomenLatest