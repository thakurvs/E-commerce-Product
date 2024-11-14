import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message : '',
    type : 'success',
}

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast : (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type || 'success';
        },
        removeToast : (state, action) => {
            state.message = '';
            state.type = 'success';
        }
    }
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;