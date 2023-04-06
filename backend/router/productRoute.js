import express from 'express'
import { countProducts, createProduct, getAllProduct, getProduct, updateImages, updateProduct } from '../controller/productController.js';
import verifyTokenAndAdmin from '../verifyToken.js';

const ProductRoutes = express.Router();

//Create Product and only admin add a product
ProductRoutes.post('/add', verifyTokenAndAdmin, createProduct);

//Get all Products
ProductRoutes.get('/all', getAllProduct);

//Get one Product
ProductRoutes.get('/:id', getProduct);

//Count All Products
ProductRoutes.get('/all/countProducts', countProducts);

//Update Product Info
ProductRoutes.put('/updateProduct', updateProduct);

//Update Product Images
ProductRoutes.put('/update/:id', updateImages);

export default ProductRoutes;