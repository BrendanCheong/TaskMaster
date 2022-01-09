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
        id: "",
        tags: [],
        showState: "DEFAULT", // or EDIT or ADD
    },
    reducers: {
        viewTask: (state, action) => {
            state.HTTP = HTTP_STATUS.SUCCESS;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.endDate = action.payload.endDate;
            state.status = action.payload.status;
            state.tags = action.payload.tags;
            state.id = action.payload.id;
            state.showState = "VIEW";
        },

        viewTaskToggleStatus: (state, action) => {
            if (state.id === action.payload.id) {
                state.status = action.payload.status;
            };
        },

        editTaskState: (state, action) => {
            state.showState = action.payload.showState;
        },
    },
});

export const {
    viewTask,
    viewTaskToggleStatus,
    editTaskState,
} = taskViewSlice.actions;

export default taskViewSlice.reducer;