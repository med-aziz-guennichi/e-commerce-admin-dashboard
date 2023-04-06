import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaEye } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Order = () => {

    const user = useSelector((state) => state.user.currentUser);

    const params = useParams();
    const { id } = params;
    //console.log(id);

    const [order, setOrder] = useState([]);

    const productsMap = order.products;
    console.log(productsMap);

    const date = order.createdAt;

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/order/${id}`);
                console.log(data);
                setOrder(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

        !user && navigate('/');
    }, [id, navigate, user]);

    return (
        <div className='order'>
            <h2 className="orderTitle">Order ID: {order._id}</h2>
            <div className="orderDiv">
                <div className="orderLeft">
                    <h4 className="orderInfoTitle">Product Image</h4>
                    {productsMap?.map((product) => (
                        <div className='cartItemsDiv orderDiv'key={product._id}>    
                            <div className="cartItemsTop product orderProduct" >
                                <div className="cartItemsTopInner orderImageDiv">
                                    <img src={`../assets/uploads/${product.image}`} alt="" className="sliderImage" />
                                </div>
                                <div className="cartItemsTopHover orderHover">
                                    <Link to={`/product/${product._id}`} className="cartItemsLink">
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="orderMiddle">
                    <h4 className="orderInfoTitle">User Info</h4>
                    <div className="orderInfo">
                        <p className="orderText">Full Name: <span>{order.fullName}</span></p>
                        <p className="orderText">E-mail: <span>{order.email}</span></p>
                        <p className="orderText">Country: <span>{order.country}</span></p>
                        <p className="orderText">City: <span>{order.city}</span></p>
                        <p className="orderText">Address: <span>{order.address}</span></p>
                        <p className="orderText">Phone: <span>{order.phone}</span></p>
                        <p className="orderText">Price: <span>TND {(order.total)?.toFixed(2)}</span></p>
                        <p className="orderText">Date: <span>{(date)?.substring(0, 10)}</span></p>
                    </div>
                </div>
                <div className="orderRight">
                    <h4 className="orderInfoTitle">Others Info</h4>
                    <div className="orderInfo">
                        <p className="orderText">Paid At: <span>Not Paid</span></p>
                        <p className="orderText">Delivery At: <span>Not Delivery</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order