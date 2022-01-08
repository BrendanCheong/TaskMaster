import { createSlice, current } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "./constants";

const taskViewSlice = createSlice({
    name: "taskView",
    initialState: {
        HTTP: HTTP_STATUS.LOADING,
        title: "",
        content: "",
        endDate: "",
        status: false,
        tags: [],
        showState: "DEFAULT", // or EDIT
    },
    reducers: {
        viewTask: (state, action) => {
            state.HTTP = HTTP_STATUS.SUCCESS;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.endDate = action.payload.endDate;
            state.status = action.payload.status;
            state.tags = action.payload.tags;
            state.showState = "VIEW";
        },
    },
});

export const {
    viewTask,
} = taskViewSlice.actions;

export default taskViewSlice.reducer;