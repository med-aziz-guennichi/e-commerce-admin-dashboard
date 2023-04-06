import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { addProducts } from '../redux/apiCalls.js';
import { useDispatch } from 'react-redux'

const AddProducts = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [star, setStar] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageOne, setImageOne] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();

  const addProduct = async (e) => {
    e.preventDefault();

    const newUrl = {};
    const newUrlOne = {};

    //upload image
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name; //for name of image
      data.append('name', fileName);
      data.append('file', image);
      newUrl.image = fileName;

      try {

        await axios.post('/api/upload', data);
        setSuccess('Images uploaded successfully!');

      } catch (error) {
        setError('Error. Images not uploaded!');
      }
    }

    //upload imageOne
    if (imageOne) {
      const dataOne = new FormData();
      const fileNameOne = Date.now() + imageOne.name; //for name of image
      dataOne.append('name', fileNameOne);
      dataOne.append('file', imageOne);
      newUrlOne.imageOne = fileNameOne;

      try {

        await axios.post('/api/upload', dataOne);
        setSuccess('Images uploaded successfully!');

      } catch (error) {
        setError('Error. Images not uploaded!');
      }
    }


    //add product
    try {

      const result = addProducts(dispatch, { name, category, price, star, description, image: newUrl.image, imageOne: newUrlOne.imageOne });

      if (result) {
        setSuccess('Product successfully added!');
      }

    } catch (error) {
      setError("Error. Product not added!");
    }

  }

  return (
    <div className='formSign'>
      <div className="formSignDiv">
        <form onSubmit={addProduct}>
          <div className="formSignGroups">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='House Name' required />
            <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder='House Category' required />
            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='House Price' required />
            <input type="text" onChange={(e) => setStar(e.target.value)} placeholder='House Room' required />
            <textarea name="" onChange={(e) => setDescription(e.target.value)} id="" cols="30" rows="10" placeholder='Product Description'></textarea>
            <div>
              <label htmlFor="image">
                <span>Select Image</span>
              </label>
              <input type="file" id='image' accept='.png, .jpg, .jpeg' onChange={(e) => setImage(e.target.files[0])} required />
              <label htmlFor="image1">
                <span>Select Another Image</span>
              </label>
              <input type="file" id='image1' accept='.png, .jpg, .jpeg' onChange={(e) => setImageOne(e.target.files[0])} required />
            </div>
          </div>
          <button>Add Product</button>
          {error && <span className='error'>{error}</span>}
          {success && <span className='success'>{success}</span>}
        </form>
      </div>
    </div>
  )
}

export default AddProducts