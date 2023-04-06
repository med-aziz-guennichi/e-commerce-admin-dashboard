import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Add Product
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
            state.products = [];
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateInfoSuccess: (state, action) => {
            state.isFetching = true;
            state.products = action.payload
        },
    },
});

export const { addProductStart, addProductSuccess, addProductFailure, updateInfoSuccess } = productSlice.actions;
export default productSlice.reducer;