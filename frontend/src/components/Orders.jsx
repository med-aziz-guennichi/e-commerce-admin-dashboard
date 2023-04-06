import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {

  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/order/find/${userId}`);
      setOrders(result.data);
      console.log(result.data);
    }
    fetchData();
  }, [userId]);


  return (
    <div className='orders'>
      {orders.length === 0 ? (<h4 className='noProducts'>There are currently no orders!</h4>) : (
        orders.map((order) => (
          <h4 className="ordersId" key={order._id}>Order ID: {order._id} <Link to={`/orders/${order._id}`}><FaEye /></Link></h4>
        ))
      )}
    </div>
  )
}

export default Orders