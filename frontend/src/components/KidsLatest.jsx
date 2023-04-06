import React from 'react'
import Slider from "react-slick";
import { FaBed, FaEye, FaShoppingCart, FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import beach1 from '../assets/beach1.jpg'
import beach2 from '../assets/beach2.jpeg'
import beach3 from '../assets/beach3.jpeg'
import beach4 from '../assets/beach4.jpeg'

const KidsLatest = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="latestContainer" id="kids">
      <div className="latestDiv">
        <div className="latestTetxs">
          <h3 className="latestTitle">Houses in Beach</h3>
          <p className="latestDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings}>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={beach1} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 500.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={beach2} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 300.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={beach3} alt="" className="sliderImage" />
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
                    <h4 className="sliderImgPrice">TND 1.000.000</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img height={500} src={beach4} alt="" className="sliderImage" />
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

export default KidsLatest