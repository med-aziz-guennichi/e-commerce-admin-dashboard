import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaBed } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const ProductDetails = () => {

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const totalPrice = product.price * quantity;

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/api/product/${id}`);
            setProduct(result.data);
            //console.log(result.data);
        }

        fetchData();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const addToCartHandler = () => {
        dispatch(addProduct({ ...product, quantity }));
    }

    return (
        <div className='productDetails'>
            <div className="productDetailsDiv">
               
                <div className="productDetailsBottom">
                    <div className="productDetailsBottomLeft">
                        <div className="productDetailsBottomImg">
                            <h1>Image 1:</h1>
                            <img src={`../assets/uploads/${product.image}`} alt={product.name} />
                        </div>
                        <div className="productDetailsBottomImg">
                        <h1>Image 2:</h1>
                            <img src={`../assets/uploads/${product.imageOne}`} alt={product.name} />
                        </div>
                    </div>
                    <div className="productDetailsBottomRight">
                        <div className="productDetailsBottomTexts">
                            <div className="productDetailsBottomContent">
                                <h4>{product.name}</h4>
                                <span>{product.star} <FaBed /></span>
                            </div>
                            <span className='productPrice'>TND {(product.price)}</span>

                            <span className='productDesc'>{product.description}</span>
                        </div>
                        <div className="productDetailsBottomSocials">
                            <div className="productQuantity">
                                <div className="productQuantityLeft">
                                    <h6>No. of Orders</h6>
                                </div>
                                {/* <div className="productQuantityRight">
                                    <input type="button" onClick={() => handleQuantity("dec")} value="-" className='minus' />
                                    <input type="number" min="1" step="1" value={quantity} className='value' />
                                    <input type="button" onClick={() => handleQuantity("inc")} value="+" className='plus' />
                                </div> */}
                            </div>
                        </div>
                        <div className="productDetailsBottomSocials total">
                            <div className="productTotal">
                                <h4>Total: TND {(totalPrice)}</h4>
                                <button onClick={addToCartHandler}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails