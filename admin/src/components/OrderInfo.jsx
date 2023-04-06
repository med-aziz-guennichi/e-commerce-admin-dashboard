import React from 'react'

const OrderInfo = ({ setOpen, order }) => {

    const date = order.createdAt;
    const productsMap = order.products;

    const url = 'http://localhost:3000/';

    return (
        <div className='productInfoContainer'>
            <div className="productInfoWrapper">
                <h4 className="closeProductInfo" onClick={() => setOpen(false)}>Close</h4>
                <div className="productInfoGroups ordersInfoGroups">
                    <div className="productInfoFlex">
                        <div className="productInfoGroup">
                            <p className="userTtitle">Full Name: <span>{order.fullName}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">E-mail: <span>{order.email}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Country: <span>{order.country}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">City: <span>{order.city}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Address: <span>{order.address}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Phone: <span>{order.phone}</span></p>
                        </div>
                        {/* <div className="productInfoGroup">
                            <p className="userTtitle">Number of Products: <span>{order.quantity}</span></p>
                        </div> */}
                        <div className="productInfoGroup">
                            <p className="userTtitle">Price Total: <span>${(order.total)?.toFixed(2)}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Date: <span>{(date)?.substring(0, 10)}</span></p>
                        </div>
                    </div>
                    <div className="productInfoFlex">
                        {productsMap?.map((product) => (
                            <div className="productInfoGroup userImage" key={product._id}>
                                <span>{product.name}</span>
                                <img src={`${url}./assets/uploads/${product.image}`} alt={product.name} />
                            </div>
                        ))}
                    </div>
                    <div className="productInfoFlex">
                        <div className="productInfoGroup">
                            <p className="userTtitle">Paid At: <span>Not Paid</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Delivery At: <span>Not Delivery</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo