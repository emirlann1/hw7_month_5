import {createSlice} from "@reduxjs/toolkit";


const initialState  = {
    bus: []
}

const busketSlice = createSlice({
    name: 'busSlice',
    initialState,
    reducers: {
        setBus: (state, action) => {
            state.bus.push(action.payload)
        }
    }
})

export default busketSlice.reducer;
export const {setBus} =  busketSlice.actions;
export const busSelect = state => state.busketSlice;