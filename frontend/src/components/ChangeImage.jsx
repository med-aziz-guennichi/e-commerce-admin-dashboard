import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { FaImage } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls';

const ChangeImage = () => {

    const user = useSelector((state) => state.user.currentUser);

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const dispatch = useDispatch();

    const updateImageHandler = async(e) => {
        e.preventDefault();

        //for upload image
        const newImage = {
            userId: user._id,
        };

        if(image) {
            const data = new FormData();
            const fileName = Date.now() + image.name; //for name of image
            data.append('name', fileName);
            data.append('file', image);
            newImage.image = fileName;

            try {

                await axios.post('/api/upload', data);
                setSuccess('Image uploaded successfully!');
                logout(dispatch);

            } catch(error) {
                setError('Error. Image not uploaded!');
            }
        }

        //for update image
        try {
            await axios.put('/api/user/update/'+ user._id, newImage);
            setSuccess('Image updated successfully!');
        } catch(error) {
            setError('Error. Image not updated!');
        }
    }

    return (
        <form onSubmit={updateImageHandler}>
            <div className="updateImage">
                <label htmlFor="image" className='labelImage'>
                    <FaImage />
                </label>
                <input type="file" id='image' accept='.png, .jpg, .jpeg' onChange={(e) => setImage(e.target.files[0])} className='userImage' />
            </div>
            {image && <button>Update User Image</button>}
            {error && <span className='error'>{error}</span>}
            {success && <span className='success'>{success}</span>}
        </form>
    )
}

export default ChangeImage