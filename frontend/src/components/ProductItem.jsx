import React from 'react'
import { FaBed, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <div className='sliderImgDiv'>
        <div className="sliderImgTop product">
            <div className="sliderImgTopInner">
                <img height={500} src={`./assets/uploads/${product.image}`} alt={product.name} className="sliderImage" />
            </div>
            <div className="sliderImgTopHover">
                <Link to={`/product/${product._id}`} className="sliderImgLink">
                <FaEye />
                </Link>
                
            </div>
        </div>
        <div className="sliderImgBottom">
            <div className="sliderImgBottomTop productTop">
                <h3 className="sliderImgTitle productTitle">{product.name}</h3>
                <span className="sliderImgStar">{product.star} <FaBed /></span>
            </div>
            <div className="sliderImgBottomBottom">
                <h4 className="sliderImgPrice">TND {(product.price).toFixed(2)}</h4>
            </div>
        </div>
    </div>
  )
}

export default ProductItem