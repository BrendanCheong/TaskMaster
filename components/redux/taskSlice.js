/* eslint-disable valid-jsdoc */
import { createSlice, current } from "@reduxjs/toolkit";
import { OPTIONS } from "./constants";
import Fuse from "fuse.js";
import { 
    addTaskAsync, 
    toggleTaskStatusAsync, 
    deleteTaskAsync, 
    updateTaskAsync, 
    getTaskAsyncWithFilters, 
} from "./redux-thunks/taskAsync";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        filterStatus: (state, action) => {
            let output = state;
            if (action.payload.status) {
                output = state.filter((task) => task.attributes.status === action.payload.status);
            }

            if (action.payload.search) {
                const fuzzy = new Fuse(output, OPTIONS);
                const result = fuzzy.search(action.payload.search);
                output = result.map((result) => result.item );
            }
            return output;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTaskAsyncWithFilters.fulfilled, getTaskWithFiltersFulfiled)
            .addCase(addTaskAsync.fulfilled, addTaskFulfiled)
            .addCase(toggleTaskStatusAsync.fulfilled, toggleTaskStatusFulfiled)
            .addCase(updateTaskAsync.fulfilled, updateTaskFulfiled)
            .addCase(deleteTaskAsync.fulfilled, deleteTaskFulfiled);
    },
});

// add reducer to the store
export default taskSlice.reducer;

export const {
    filterStatus,
    fuzzySearch,
} = taskSlice.actions;

/**
 * List of actions for async thunks. 
 */
const getTaskWithFiltersFulfiled = (state, action) => {
    let output = action.payload.response;
    const filterInput = action.payload.response.filter;
    // handles the logic of each of the filters parameters
    if (filterInput.status !== null) {
        output = [...output].filter((task) => {
            return task.attributes.status === filterInput.status;
        });
    }

    if (filterInput.search !== null) {
        const fuzzy = new Fuse(output, OPTIONS);
        const result = fuzzy.search(filterInput.search);
        output = result.map((result) => result.item );
    }
    return output;
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