import { injectReducer } from "../../../store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    test: false
}
export const name = "test";
const slice = createSlice({
    name,
    initialState,
    reducers: {
        changeMode: (state) => {
            state.test = !state.test // Set product
        },
        changeToFalse: (state) => {
            state.test = false // Set product
        },
    },
});
injectReducer(name, slice.reducer);

export const { changeMode,changeToFalse } = slice.actions;