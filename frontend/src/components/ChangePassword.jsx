import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePassword } from '../redux/apiCalls.js';

function ChangePassword({ user }) {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    

    const dispatch = useDispatch();

    const handlerUpdatePassword = async (e) => {
        e.preventDefault();
        try {

            if(newPassword !== repeatNewPassword) {
                setError("Passwords Don't Match!");
                return;
            } else {
                updatePassword(dispatch, {
                    _id: user._id,
                    oldPassword,
                    newPassword,
                    repeatNewPassword
                });
                setSuccess("Password updated successfully!");
            }

            

        } catch (error) {
            setError("Password not updated!");
        }

    }

    return (
        <form onSubmit={handlerUpdatePassword}>
            <div className="formSignGroups">
                <input type="password" onChange={(e) => setOldPassword(e.target.value)} placeholder='Your Old Password' required />
                <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder='Your New Password' required />
                <input type="password" onChange={(e) => setRepeatNewPassword(e.target.value)} placeholder='Confirm Your New Password' required />
            </div>
            <button>Update Password</button>
            {error && <span className='error'>{error}</span>}
            {success && <span className='success'>{success}</span>}
        </form>
    )
}

export default ChangePassword