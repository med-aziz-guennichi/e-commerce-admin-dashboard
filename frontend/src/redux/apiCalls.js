import { publicRequest } from "../requestMethod";
import { cartClear } from "./cartRedux";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, updateInfoSuccess, updatePasswordSuccess } from "./userRedux"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const result = await publicRequest.post('/api/auth/login', user);
        dispatch(loginSuccess(result.data));
        //after success login, redirect to home page
        window.location.href = '/';
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess());
    dispatch(cartClear());
    window.location.href = '/login';
}

export const updatePassword = async (dispatch, user) => {
    const result = await publicRequest.put('/api/user/updatePassword', user);
    dispatch(updatePasswordSuccess(result.data));
}

export const deleteAccount = async (dispatch, user) => {
    const result = await publicRequest.delete('/api/user/' + user);
    dispatch(logoutSuccess(result.data));
    //after success deleted account, redirect to login page
    window.location.href = '/login';
}

export const update = async (dispatch, user) => {
    const result = await publicRequest.put('/api/user/update', user);
    dispatch(updateInfoSuccess(result.data));
}

export const deleteAllFromCart = async (dispatch) => {
    dispatch(cartClear());
    window.location.href = '/account';
}