import React from 'react'
import { useState } from 'react'
import ProductInfo from './ProductInfo';

const AllProducts = ({product}) => {

  const [open, setOpen] = useState(false);

  const url = 'http://localhost:3000/';

  return (
    <div className='allProducts'>
      <div className="productsGroups">
        <div className="productGroup">
          <div className="productHeader">
            <img src={`${url}./assets/uploads/${product.image}`} alt={product.name} />
          </div>
          <div className="productBody">
            <h4 className="productname">{product.name}</h4>
          </div>
          <div className="productFooter">
            <p className="productInfo" onClick={() =>setOpen(true)}>View all Info</p>
          </div>
        </div>
      </div>
      {open && <ProductInfo setOpen={setOpen} product={product} />}
    </div>
  )
}

export default AllProducts