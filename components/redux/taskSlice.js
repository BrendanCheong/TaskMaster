/* eslint-disable valid-jsdoc */
import { createSlice, current } from "@reduxjs/toolkit";
import { getTaskAsync, addTaskAsync, toggleTaskStatusAsync, deleteTaskAsync, updateTaskAsync } from "./redux-thunks/taskAsync";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(getTaskAsync.fulfilled, getTaskFulfiled)
            .addCase(addTaskAsync.fulfilled, addTaskFulfiled)
            .addCase(toggleTaskStatusAsync.fulfilled, toggleTaskStatusFulfiled)
            .addCase(updateTaskAsync.fulfilled, updateTaskFulfiled)
            .addCase(deleteTaskAsync.fulfilled, deleteTaskFulfiled);
    },
});

// add reducer to the store
export default taskSlice.reducer;

/**
 * List of actions for async thunks. 
 */
const getTaskFulfiled = (state, action) => {
    return action.payload.response;
};

const addTaskFulfiled = (state, action) => {
    state.push(action.payload.response);
};

const toggleTaskStatusFulfiled = (state, action) => {
    const index = current(state).findIndex(
        (task) => task.id === action.payload.response.id
    );
    // update the property as status completed or not
    state[index].attributes.status = action.payload.response.attributes.status;
};

const updateTaskFulfiled = (state, action) => {
    const index = current(state).findIndex(
        (task) => task.id === action.payload.response.id
    );
    const currentAttributes = state[index].attributes;
    const response = action.payload.response.attributes;

    currentAttributes.content = response.content;
    currentAttributes.title = response.title;
    currentAttributes.status = response.status;
    currentAttributes.endDate = response.endDate;
    currentAttributes.tags = response.tags;
    currentAttributes.updated_at = response.updated_at;
    state[index].relationships = action.payload.response.relationships;
};

const deleteTaskFulfiled = (state, action) => {
    return current(state).filter((task) => 
        task.id !== action.payload.response.id
    );
};