import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState  = {
    products: [],
    load: true
}

export const getProducts = createAsyncThunk('products', async () => {
    const {data} = await axios.get('https://fakerapi.it/api/v1/products/')
    return data.data;
})

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.load = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.load = false
            })
            .addCase(getProducts.rejected, () => {
                alert('Error')
            })
    }
})

export default productsSlice.reducer;
export const prodSelect = state => state.productsSlice;