import { createSlice, current } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "./constants";
import { getTaskAsync, addTaskAsync, toggleTaskStatusAsync, deleteTaskAsync } from "./redux-thunks/taskAsync";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        deleteTask: (state, action) => {
            return state.filter((task) =>
                task.id !== action.payload.id
            );
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTaskAsync.fulfilled, getTaskFulfiled)
            .addCase(addTaskAsync.fulfilled, addTaskFulfiled)
            .addCase(toggleTaskStatusAsync.fulfilled, toggleTaskStatusFulfiled)
            .addCase(deleteTaskAsync.fulfilled, deleteTaskFulfiled);
    },
});

// get the actions from the action object
export const { 
    addTask,
    toggleStatus,
    deleteTask,
} = taskSlice.actions;

// add reducer to the store
export default taskSlice.reducer;

// List of actions for async thunks
const getTaskFulfiled = (state, action) => {
    return action.payload.response;
};

const addTaskFulfiled = (state, action) => {
    console.log(state);
    state.push(action.payload.response);
};

const toggleTaskStatusFulfiled = (state, action) => {
    const index = current(state).findIndex(
        (task) => task.id === action.payload.response.id
    );
    // update the property as status completed or not
    state[index].attributes.status = action.payload.response.attributes.status;
};

const deleteTaskFulfiled = (state, action) => {
    return current(state).filter((task) => 
        task.id !== action.payload.response.id
    );
};

const taskPending = (state) => {
    console.log("Pending ...");
    // initial state, will change unless theres an error
    state.HTTP = HTTP_STATUS.LOADING;
};

const taskRejected= (state, { error }) => {
    console.log("Error!");
    state.HTTP = HTTP_STATUS.ERROR;
    state.error = error.message;
};

// once initial state is already loaded, I must do something like .push(error)