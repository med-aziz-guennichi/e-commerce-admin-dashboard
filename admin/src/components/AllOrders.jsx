import React, { useState } from 'react'
import OrderInfo from './OrderInfo'

const AllOrders = ({order}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className='allOrders'>
      <div className="ordersGroups">
        <div className="orderGroup">
          <h4 className="orderTitle">Order ID: <span>{order._id}</span></h4>
          <p className="orderInfo" onClick={() =>setOpen(true)}>View all Info</p>
        </div>
      </div>
      {open && <OrderInfo setOpen={setOpen} order={order} />}
    </div>
  )
}

export default AllOrders