import { publicRequest, userRequest } from "../requestMethod";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateInfoSuccess,
} from "./productRedux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/api/auth/login", user);
    console.log(result);
    //log only as admin
    const isAdmin = result.data;
    dispatch(loginSuccess(result.data));
    if (isAdmin.isAdmin === true) {
      dispatch(loginSuccess(result.data));
      //after success login, redirect to home page
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
  window.location.href = "/login";
};

export const addProducts = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/api/product/add`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const updateProduct = async (dispatch, product) => {
  const result = await publicRequest.put("/api/product/updateProduct", product);
  dispatch(updateInfoSuccess(result.data));
};
