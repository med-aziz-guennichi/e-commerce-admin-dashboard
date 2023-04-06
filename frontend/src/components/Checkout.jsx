import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromCart } from '../redux/apiCalls';

const Checkout = ({ setOpen, finishPrice }) => {

    const user = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state) => state.cart);

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [country, setCountry] = useState(user.country);
    const [city, setCity] = useState(user.city);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const orderProductsNow = async(e) => {

        const fetchData = async () => {
            try {
                const result = await axios.post('/api/order/add', {
                    userId: user._id,
                    fullName: username,
                    email: email,
                    country: country,
                    city: city,
                    address: address,
                    phone: phone,
                    products: cart.products,
                    total: finishPrice,
                    quantity: cart.quantity
                });

                if(result) {
                    deleteAllFromCart(dispatch);
                    setOpen(false);
                }

            } catch (error) {
                setError("Ordering error!")
            }
        }
        fetchData();
    }

    return (
        <div className='checkoutContainer'>
            <div className="checkoutWrapper">
                <h4 className="closeCheckout" onClick={() => setOpen(false)}>Close</h4>
                <div className="checkoutGroups">
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} defaultValue={username} placeholder='Full Name' required />
                    </div>
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} defaultValue={email} placeholder='E-mail Address' required />
                    </div>
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setCountry(e.target.value)} defaultValue={country} placeholder='Country' required />
                    </div>
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setCity(e.target.value)} defaultValue={city} placeholder='City' required />
                    </div>
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setAddress(e.target.value)} defaultValue={address} placeholder='Address' required />
                    </div>
                    <div className="checkoutGroup">
                        <input type="text" onChange={(e) => setPhone(e.target.value)} defaultValue={phone} placeholder='Phone' required />
                    </div>
                    <div className="checkoutGroup">
                        <button className='orderNow' onClick={orderProductsNow}>Order now</button>
                    </div>
                    {error && <span className='error'>{error}</span>}
                </div>
            </div>
        </div>
    )
}

export default Checkout