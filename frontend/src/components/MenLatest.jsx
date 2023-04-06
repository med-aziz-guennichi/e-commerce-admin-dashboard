import React from 'react'
import Slider from "react-slick";
import { FaBed, FaEye, FaShoppingCart, FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import village1 from '../assets/village1.jpg'
import village2 from '../assets/village2.jpg'
import village3 from '../assets/village3.jpg'
import village4 from '../assets/village4.jpg'


const MenLatest = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="latestContainer" id="men">
      <div className="latestDiv">
        <div className="latestTetxs">
          <h3 className="latestTitle">Houses In village</h3>
          <p className="latestDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings}>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={village4} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 150.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={village1} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 400.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={village2} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 200.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={village3} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 700.000</h4>
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

export default MenLatest