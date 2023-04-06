import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/apiCalls';

const ChangeInfo = () => {

    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [country, setCountry] = useState(user.country);
    const [city, setCity] = useState(user.city);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    

    const updateInfoHandler = (e) => {
        e.preventDefault();

        try {

            update(dispatch, { 
                _id: user._id,
                username,
                email,
                country,
                city,
                address,
                phone,
            });

            setSuccess("Account updated successfully!");

        } catch(error) {
            setError("Account not updated!");
        }

    }

    return (
        <form onSubmit={updateInfoHandler}>
            <div className="formSignGroups">
                <input type="text" placeholder='Your Username' onChange={(e) => setUsername(e.target.value)} defaultValue={username} required />
                <input type="email" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} defaultValue={email} required />
                <input type="text" placeholder='Your Country' onChange={(e) => setCountry(e.target.value)} defaultValue={country} required />
                <input type="text" placeholder='Your City' onChange={(e) => setCity(e.target.value)} defaultValue={city} required />
                <input type="text" placeholder='Your Address' onChange={(e) => setAddress(e.target.value)} defaultValue={address} required />
                <input type="text" placeholder='Your Phone' onChange={(e) => setPhone(e.target.value)} defaultValue={phone} required />
                
            </div>
            <button>Update Info</button>
            {error && <span className='error'>{error}</span>}
            {success && <span className='success'>{success}</span>}
        </form>
    )
}

export default ChangeInfo