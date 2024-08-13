import { injectReducer } from "@/store";
import generateActions from "./generateActions";
import { createSlice } from "@reduxjs/toolkit";
import { staff } from "../types";

export const initialState = {
    user: null
};

export const name = "staff";

const slice = createSlice({
    name,
    initialState,
    reducers: {
        ...generateActions(initialState),
        setStaff: (state: any, action: any) => {
            state.user = action.payload ;
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;