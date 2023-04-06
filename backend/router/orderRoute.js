import express from 'express'
import { getAllOrders, getAllSum, getMyOrder, getUserOrders, order } from '../controller/orderController.js';

const OrderRoutes = express.Router();

//Get All Orders
OrderRoutes.get('/allOrders', getAllOrders);

//Create Orders
OrderRoutes.post('/add', order)

//Get User Orders
OrderRoutes.get('/find/:userId', getUserOrders);

//Get My Order
OrderRoutes.get('/:id', getMyOrder);

//Get Total Sum
OrderRoutes.get('/sum/getAllSum', getAllSum);

export default OrderRoutes;