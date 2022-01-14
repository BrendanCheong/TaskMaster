import { createSlice } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "./constants";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {
        HTTP: HTTP_STATUS.LOADING,
        tagName: [],
        buttonState: "all",
        task: "",
    },
    reducers: {
        setFilter: (state, action) => {
            state.HTTP = HTTP_STATUS.LOADING;
            state.tagName = action.payload.tagName;
            state.buttonState = action.payload.buttonState;
            state.task = action.payload.task;
        },
    },
});

export const {
    setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;