import express from 'express'
import { countUsers, deleteAccount, getAllUsers, updateImage, updatePassword, updateUser } from '../controller/userController.js';

const UserRoutes = express.Router();

//Get All Users
UserRoutes.get('/allUsers', getAllUsers);

//Update User Info
UserRoutes.put('/update', updateUser);

//Update User Password
UserRoutes.put('/updatePassword', updatePassword);

//Delete User Account
UserRoutes.delete('/:id', deleteAccount);

//Update User Image
UserRoutes.put('/update/:id', updateImage);

//Count All Users
UserRoutes.get('/countUsers', countUsers);


export default UserRoutes;