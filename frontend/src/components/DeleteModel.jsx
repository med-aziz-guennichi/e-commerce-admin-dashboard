import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount } from '../redux/apiCalls';

const DeleteModel = ({ setOpen }) => {

    const user = useSelector((state) => state.user.currentUser);
    const userId = user?._id;

    const dispatch = useDispatch();

    const [error, setError] = useState(null);

    const deleteHandler = (e) => {
        e.preventDefault();

        try {

            deleteAccount(dispatch, userId);

        } catch (error) {
            setError("Account not deleted!");
        }
    }

    return (
        <>

            <div className="deleteContainer">
                <div className='deleteModel'>
                    <div className="deleteTop">
                        <h4 className="deleteTitle">Are you sure you want to delete your account?</h4>
                    </div>
                    <div className="deleteBottom">
                        <button className='deleteBtnNo' onClick={() => setOpen(false)}>NO</button>
                        <button className='deleteBtnYes' onClick={deleteHandler}>YES</button>
                    </div>
                </div>
            </div>
            {error && <span className='error'>{error}</span>}

        </>
    )
}

export default DeleteModel