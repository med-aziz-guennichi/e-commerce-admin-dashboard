import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/apiCalls';

const ProductInfo = ({ setOpen, product }) => {

    
    const url = 'http://localhost:3000/';

    const dispatch = useDispatch();

    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product.category);
    const [price, setPrice] = useState(product.price);
    const [star, setStar] = useState(product.star);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(null);
    const [imageOne, setImageOne] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [errorImg, setErrorImg] = useState(null);
    const [successImg, setSuccessImg] = useState(null);

    const updateInfo = (e) => {
        e.preventDefault();
        try {

            updateProduct(dispatch, {
                _id: product._id,
                name,
                category,
                price,
                star,
                description,
            });

            setSuccess("Product updated successfully!");

        } catch (error) {
            setError("Product not updated!");
        }
    }

    const updateImage = async (e) => {
        e.preventDefault();

        //for upload image
        const newImage = {
            productId: product._id,
        };

        //upload image
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name; //for name of image
            data.append('name', fileName);
            data.append('file', image);
            newImage.image = fileName;

            try {

                await axios.post('/api/upload', data);
                setSuccessImg('Images uploaded successfully!');

            } catch (error) {
                setErrorImg('Error. Images not uploaded!');
            }
        }

        //upload imageOne
        if (imageOne) {
            const dataOne = new FormData();
            const fileNameOne = Date.now() + imageOne.name; //for name of image
            dataOne.append('name', fileNameOne);
            dataOne.append('file', imageOne);
            newImage.imageOne = fileNameOne;

            try {

                await axios.post('/api/upload', dataOne);
                setSuccessImg('Images uploaded successfully!');

            } catch (error) {
                setErrorImg('Error. Images not uploaded!');
            }
        }

        //for update image
        try {
            await axios.put('/api/product/update/' + product._id, newImage);
            setSuccessImg('Images updated successfully!');
        } catch (error) {
            setErrorImg('Error. Images not updated!');
        }
    }

    return (
        <div className='productInfoContainer'>
            <div className="productInfoWrapper">
                <h4 className="closeProductInfo" onClick={() => setOpen(false)}>Close</h4>
                <form>
                    <div className="productInfoGroups">
                        <div className="productInfoFlex">
                            <div className="productInfoGroup">
                                <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} placeholder='House Name' required />
                            </div>
                            <div className="productInfoGroup">
                                <input type="text" onChange={(e) => setCategory(e.target.value)} defaultValue={category} placeholder='House Category' required />
                            </div>
                            <div className="productInfoGroup">
                                <input type="text" onChange={(e) => setPrice(e.target.value)} defaultValue={price} placeholder='House Price' required />
                            </div>
                            <div className="productInfoGroup">
                                <input type="text" onChange={(e) => setStar(e.target.value)} defaultValue={star} placeholder='House Star' required />
                            </div>
                            <div className="productInfoGroup">
                                <textarea name="" onChange={(e) => setDescription(e.target.value)} defaultValue={description} id="" cols="30" rows="10" placeholder='Product Description'></textarea>
                            </div>
                            <div className="productInfoGroup">
                                <button onClick={updateInfo} className='update'>Update Info</button>
                            </div>

                            {error && <span className='error'>{error}</span>}
                            {success && <span className='success'>{success}</span>}
                        </div>
                        <div className="productInfoFlex">
                            <div className="productInfoGroup image">
                                <span>Product Image</span>
                                <img src={`${url}./assets/uploads/${product.image}`} alt={product.name} />
                                <input type="file" accept='.png, .jpg, .jpeg' onChange={(e) => setImage(e.target.files[0])} required />
                            </div>
                            <div className="productInfoGroup image">
                                <span>Product Another Image</span>
                                <img src={`${url}./assets/uploads/${product.imageOne}`} alt={product.name} />
                                <input type="file" accept='.png, .jpg, .jpeg' onChange={(e) => setImageOne(e.target.files[0])} required />
                            </div>
                            <div className="productInfoGroup mt">
                                <button onClick={updateImage} className='update'>Update Images</button>
                            </div>

                            {errorImg && <span className='error'>{errorImg}</span>}
                            {successImg && <span className='success'>{successImg}</span>}
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductInfo